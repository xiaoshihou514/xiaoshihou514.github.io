---
layout: post
title: Writing context sensitive parsers with parsley
---

This article goes through how I built a context sensitive parser for a toy example.

## Introduction

[Parsley](https://github.com/j-mie6/parsley) allows for a state to be referenced and set during parsing, much like the `State` monad in Haskell.

```scala
import parsley.state.{RefMaker, Ref}

case class State(x: Int)
val p = State(0).makeRef { (state: Ref[State]) =>
    // we can "interact" with the state in this clause
    // and we should return a parser

    // given a parser, we can use flatMap/>>= to make it have some "effects"
    // str is foo, the result of the parser
    string("foo").flatMap { (str: String) =>
        state.update { (s: State) =>
            // we get to access the state directly in this clause
            State(s.x + 1)
        }
    }
}
```

This is very intuitive, but not so efficient because of parsley's internal compiler cannot optimize monadic parsers. The alternative, applicative parsers are a bit awkward syntactically, but are not drastically different. Let's work through a parser as an example.

## An example

So we are going to parse input structured like so:

```
boo()
bar(1)
    baz(1, 2)
        fizz()
        buzz()
    h(1)
g(2)
n(3)
```

Each line has a statement (`many(letter)` for brevity) and optionally some references to a previous line number. This is obviously context sensitive, not only do we reference previously parsed content, we also use indents to identify scopes.

### The types

Let's take a look at what we are going to parse it into:

```scala
sealed trait Pf
case class Stmt(body: String, ref: List[String]) extends Pf
case class Scope(var body: List[Pf]) extends Pf
```

We then identify the State for our parser: - current indent level - parse result of all previous lines

Since the parser feels very imperative mentally I just added a scope stack to the State, but I'm sure there are ways to make it more pure.

The resulting State is defined as follows:

```scala
case class State(
    var level: Int,
    lines: List[String],
    var scope: List[Scope]
)
```

And since it feels very imperative anyway we won't bother copying everything :P

Let's get stuff rolling:

```scala
import parsley.Parsley
import parsley.Parsley.{many, atomic, pure}
import parsley.character.{char, item, stringOfMany, letter, digit}
import parsley.combinator.sepBy
import parsley.state.{RefMaker, Ref, StateCombinators}
import parsley.syntax.character.{charLift, stringLift}

// we will use this parser a bit later
val number = digit.foldLeft1[Int](0)((n, d) => n * 10 + d.asDigit)
```

### Statement parser

We start by creating a stateful parser:

```scala
val p: Parsley[Scope] = State(0, List(), List(Scope(List()))).makeRef { (state: Ref[State]) =>
    ???
}
```

Then a simple parser for statement, which is stateful. What I tried to do was write it in terms of flatMap, which is more "intuitive", and then use some boilerplate to transform it into applicatives.

```scala
val p: Parsley[Scope] = State(0, List(), List(Scope(List()))).makeRef { (state: Ref[State]) =>
    val stmt: Parsley[Stmt] = (
        many(letter).map(_.mkString).flatMap { str =>
            state.update { s => s.copy(lines = s.lines :+ str) }
        } <~ '('
        <~>
        sepBy(number, ", ").flatMap { xs => state.gets { s =>
                xs.map { (x: Int) => s.lines(x - 1) }
            }
        } <~ ')'
    ).map(???)
}
```

Ah hah! There's a type error! In flatMap we are supposed to return a `List[Stmt]`, but unfortunately `state.gets` returns a `Parsley[List[Stmt]]`, and it's the only way we can access a State object directly. I don't know the solution to this, but by using applicative parsers we could make the types work.

```scala
p.flatMap { res => state.update(res) }
// equivalent to
state.update { p }
```

The problem is that state.update returns `Parsley[Unit]`, we have to use `get` on it to retrieve our results.

```scala
// State stuff omitted
val stmt: Parsley[Stmt] = (
    state.update(
        many(letter).map(_.mkString).map { str => (s: State) =>
                s.copy(lines = s.lines :+ str)
        }
    ) ~> '(' ~> state.get.map(_.lines.last) // or jusr use .gets
    <~> ??? <~ ')' // we also want stuff inside the brackets
).map { res => Stmt(res._1, res._2) }
```

To formulate what we failed to express last time, we take a look at the signature of `gets`.

```scala
def gets[B](pf: Parsley[State => B]): Parsley[B]
```

It's a bit confusing! `Parsley[A]` parses string into A, what does it mean to parse a string into a `State => B`?

Let's focus on what we want first, so we want `List[Stmt]`, that's our `B`.

```scala
def gets[List[Stmt]](pf: Parsley[State => List[Stmt]]): Parsley[List[Stmt]]
```

Now, semantics aside, we can get a `Parsley[State => List[Stmt]]` with a `map`.

```scala
// ... <~>
state.gets {
    sepBy(number, ", ").map { ??? }
} <~ ')'
```

Now, it would be great if we could access a `State` in that block...

```scala
sepBy(number, ", ").map { xs => (s: State) =>
    xs.map { (x: Int) => s.lines(x - 1) }
}
```

If you think about it, the return type of the block _is_ `State => List[Stmt]`, as required :D

Result:

```scala
val stmt: Parsley[Stmt] = (
    state.update(
        many(letter).map(_.mkString).map { str => (s: State) =>
                s.copy(lines = s.lines :+ str)
        }
    ) ~> '(' ~> state.gets(_.lines.last)
    <~> state.gets {
        sepBy(number, ", ").map { xs => (s: State) =>
            xs.map { (x: Int) => s.lines(x - 1) }
        }
    } <~ ')'
).map { res => Stmt(res._1, res._2) }
```

### Parsing indents

Now we shall parse the scoping.

```scala
val scope: Parsley[Scope] = many(
    state.update((
        many(' ').map(_.length) <~> stmt <~ '\n'
    ).map { res => (s: State) =>
        ???
    }
)) ~> state.get.map(???)
```

So a document is many lines of (indent + stmt), we deployed much of the same pattern as in `stmt`, so hopefully one would agree that there's not a lot to unpack here.

So given that we know what's the indent of the last line, say `i`, the current line could have indent:

- just `i`, no scope change, we append to current scope

```scala
    if i == s.level then
        sc.head.body = sc.head.body :+ sm
```

- `i + 4`, we need to create another `Scope` with the current stmt in it, and append this new scope to the previous scope

```scala
    else if i == s.level + 4 then
        val newScope = Scope(List(sm))
        sc.head.body = sc.head.body :+ newScope
        s.level += 4
        s.scope = newScope :: s.scope
```

- `i - 4`, we need to pop current scope and append to the previous scope

```scala
    else if i == s.level - 4 then
        // prev scope
        val t = sc.tail
        t.head.body = t.head.body :+ sm
        s.level -= 4
        s.scope = t
```

OK, now when we reach the end of the document, what should we do?

Given that every previous step works, we should be able to retrieve the root `Scope` by getting the deepest item in the stack.

```scala
state.get.map { s => s.scope.last }
```

Results:

```scala
val scope: Parsley[Scope] = many(
    state.update((
        many(' ').map(_.length) <~> stmt <~ '\n'
    ).map { res => (s: State) =>
        val sc = s.scope
        val (i, sm) = res
        if i == s.level then
            sc.head.body = sc.head.body :+ sm
        else if i == s.level + 4 then
            // new scope
            val newScope = Scope(List(sm))
            sc.head.body = sc.head.body :+ newScope
            s.level += 4
            s.scope = newScope :: s.scope
        else if i == s.level - 4 then
            // prev scope
            val t = sc.tail
            t.head.body = t.head.body :+ sm
            s.level -= 4
            s.scope = t
        else
            fail()  // TODO: better errors
        s
    }
)) ~> state.get.map { s => s.scope.last }
```

Full parser:

<details>
<summary>Full code snippet</summary>
{% highlight scala %}
val p: Parsley[Scope] = State(0, List(), List(Scope(List()))).makeRef { (state: Ref[State]) =>
    val stmt: Parsley[Stmt] = (
        state.update(
            many(letter).map(_.mkString).map { str => (s: State) =>
                    s.copy(lines = s.lines :+ str)
            }
        ) ~> '(' ~> state.gets(_.lines.last) 
        <~> state.gets {
            sepBy(number, ", ").map { xs => (s: State) =>
                xs.map { (x: Int) => s.lines(x - 1) }
            }
        } <~ ')'
    ).map { res => Stmt(res._1, res._2) }
    val scope: Parsley[Scope] = many(
        state.update((
            many(' ').map(_.length) <~> stmt <~ '\n'
        ).map { res => (s: State) =>
            val sc = s.scope
            val (i, sm) = res
            if i == s.level then
                sc.head.body = sc.head.body :+ sm
            else if i == s.level + 4 then
                // new scope
                val newScope = Scope(List(sm))
                sc.head.body = sc.head.body :+ newScope
                s.level += 4
                s.scope = newScope :: s.scope
            else if i == s.level - 4 then
                // prev scope
                val t = sc.tail
                t.head.body = t.head.body :+ sm
                s.level -= 4
                s.scope = t
            else
                fail()  // TODO: better errors
            s
        }
    )) ~> state.get.map { s => s.scope.last }
    scope
}
{% endhighlight %}

</details>

<details>
<summary>A sample test</summary>
{% highlight scala %}
val testStr = """
boo()
bar(1)
    baz(1, 2)
        fizz()
        buzz()
    h(1)
g(2)
n(3)
            """.trim() + "\n"
        val output = """
boo()
bar(boo)
    baz(boo, bar)
        fizz()
        buzz()
    h(boo)
g(bar)
n(baz)
            """.trim()
assert(p.parse(testStr).get.toString() === output) // toString implementation omitted
{% endhighlight %}
</details>

### Afterthoughts

A question that came to mind is why should I write such a context sensitive parser if it could be implemented, perhaps a bit simpler, with just a for loop? In [the official tutorial](https://j-mie6.github.io/parsley/4.5/tutorial/), it was said that:

 <div class="quote">
  <p>
For most languages, the grammar is constructed in such a way that it remains context-free. This is, primarily, because context-sensitive grammars are a brutal combination of hard to express and hard to parse efficiently. Indentation-sensitive parsing can be considered an example of a context-sensitive grammar, though, in practice, some compilers like to shunt the work out to the lexer to make the grammar context-free again (this is the case with Python).
  </p>
</div>

<s><i>AND</i> the tutorial for context-sensitive parsing is still a TODO as of now</s>

Despite that, I think encoding this with parser combinator is still preferable.

- You get unified error messages.
- Simpler and more functional code.
- Because you can with parser combinators?

I hope you find this article useful, especially that you can copy paste the part about indent parsing. The code is far from perfect, it was very imperative, though you could hide it by wrapping the mutations inside the class. I am quite happy for what I was able to achieve as a beginner to the world of parser combinator.

Happy parsing!
