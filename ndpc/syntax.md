# List of rules

## Introduction

| Symbol  |            Reads             |                     Argument Semantics                      |
| :-----: | :--------------------------: | :---------------------------------------------------------: |
|   ^I    |       And Introduction       |                   from x, y deduce x ^ y                    |
|   ->I   |   Implication Introduction   |         from "assuming x deduces y", deduce x -> y          |
|   /I    |       Or Introduction        |                from x deduce x / ? or ? / x                 |
|   ~I    |       Not Introduction       | from "assuming original deduces bottom" deduce its negation |
|   ~~I   | Double Negation Introduction |                      from x deduce ~~x                      |
|   FI    |     Falsity Introduction     |                   from x and ~x deduce F                    |
|   TI    |      Truth Introduction      | from nothing deduces T (but why would you do that :smirk:)  |
|  <->I   |   Equivalence Introduction   |            from x -> y and y -> x deduce x <-> y            |
| existsI |     Exists Introduction      |                  from 𝝓(x) deduce ∃a 𝝓(a)                   |
| forallI |     Forall Introduction      |            from "c deduces f(c)" deduce ∀x f(x)             |

## Elimination

|  Symbol   |             Reads              |                            Argument Semantics                            |
| :-------: | :----------------------------: | :----------------------------------------------------------------------: |
|    ^E     |        And Elimination         |                        from x ^ y deduce x (or y)                        |
|    ->E    |    Emplication Elimination     |                        from x -> y and x deduce y                        |
|    /E     |         Or Elimination         | from x1 / x2, "assuming x1 deduces y", "assuming x2 deduces y", deduce y |
|    ~E     |        Not Elimination         |                   from x and ~x deduces F (same as FI)                   |
|    ~~E    |  Double Negation Elimination   |                            from ~~x deduce x                             |
|    FE     |      Falsity Elimination       |                          from F deduce anything                          |
|   <->E    |    Equivalence Elimination     |           from x <-> y and either side, deduce the other side            |
|  existsE  |       Exists Elimination       |          from ∃a 𝝓(a) and "𝝓(c) for some c deduces x", deduce x          |
|  forallE  |       Forall Elimination       |                        from ∀x f(x) deduce f[x/c]                        |
| forall->E | Forall Implication Elimination |               from ∀x f(x) -> g(x) and f(c), deduces g(c)                |

## Special

|     Symbol     |         Reads          |           Argument Semantics           |
| :------------: | :--------------------: | :------------------------------------: |
|      LEM       | Law of Excluded Middle |       from nothing deduce p / ~p       |
|       MT       |     Modus Tollens      |     from x -> y and ~y, deduce ~x      |
|       PC       | Proof by Contradiction | from "assuming x deduces F", deduce ~x |
|      refl      |   rule of Reflection   |       from nothing deduce x = x        |
|      =sub      | Equality Substitution  |    from a = b and f(a), deduce f(b)    |
|      sym       |    rule of Symmetry    |        from a = b deduce b = a         |
| forall I const |     forall I const     |     introduces a new free variable     |
|     given      |         Given          |      given proposition / formula       |
|    premise     |        Premise         |      given proposition / formula       |
|      ass       |       Assumption       |      assume proposition / formula      |
|      tick      |          Tick          |    from x deduce x (syntactic flag)    |

# Rule specifications

## Introduction rules

### `^I` (And Introduction)

From x, y deduce x ^ y

```
1   x           [...]
2   y           [...]
3   x ^ y       [^I(1,2)]
```

### `->I` (Implication Introduction)

From "assuming x deduces y", deduce x -> y

```
1     x           [ass]
      <hard struggle>
2     y           [...]
3   x -> y        [->I(1,2)]
```

### `/I` (Or Introduction)

From x deduce x / ? or ? / x

```
1   x
2   x / y         [/I(1)]
```

### `~I` (Not Introduction)

From "assuming original deduces bottom" deduce its negation

```
1     x           [ass]
      <hard struggle>
2     F           [...]
3   ~x            [~I(1,2)]
```

### `~~I` (Double Negation Introduction)

From x deduce ~~x

```
1   x             [...]
2   ~(~(x))           [~~I(1)]
```

### `FI` (Falsity Introduction)

From x and ~x deduce F

```
1   x             [...]
2   ~x            [...]
3   F             [FI(1,2)]
```

### `TI` (Truth Introduction)

From nothing deduces T (but why would you do that :smirk:)

```
1   T             [TI]
```

### `<->I` (Equivalence Introduction)

From x -> y and y -> x deduce x <-> y

```
1   x -> y        [...]
2   y -> x        [...]
3   x <-> y       [<->I(1,2)]
```

### `existsI` (Exists Introduction)

From 𝝓(x) deduce ∃a 𝝓(a)

```
1   𝝓(x)                [...]
2   exists x. (𝝓(x))    [existsI(1)]
```

### `forallI` (Forall Introduction)

From "c deduces f(c)" deduce ∀x f(x)

```
1     c                 [forall I const]
      <hard struggle>
2     f(c)              [...]
3   forall x. (f(x))    [forallI(1,2)]
```

## Elimination

### `^E` (And Elimination)

From x ^ y deduce x (or y)

```
1   x ^ y       [...]
2   x           [^E(1)]
```

### `->E` (Emplication Elimination)

From x -> y and x deduce y

```
1   x           [...]
2   x -> y      [...]
3   y           [->E(1,2)]
```

### `/E` (Or Elimination)

From x1 / x2, "assuming x1 deduces y", "assuming x2 deduces y", deduce y

```
1   x1 / x2         [...]
2     x1            [ass]
      <hard struggle>
3     y             [...]
4     x2            [ass]
      <hard struggle>
5     y             [...]
6   y               [/E(1,2,3,4,5)]
```

### `~E` (Not Elimination)

From x and ~x deduces F (same as FI)

```
1   x             [...]
2   ~x            [...]
3   F             [~E(1,2)]
```

### `~~E` (Double Negation Elimination)

From ~~x deduce x

```
1   ~~x         [...]
2   x           [~~E(1)]
```

### `FE` (Falsity Elimination)

From F deduce anything

```
1   F           [...]
2   anything    [FE(1)]
```

### `<->E` (Equivalence Elimination)

From x <-> y and either side, deduce the other side

```
1   x <-> y     [...]
2   y           [...]
3   x           [<->E(1,2)]
```

### `existsE` (Exists Elimination)

From ∃a 𝝓(a) and "𝝓(c) for some c deduces x", deduce x

```
1   exists a. (𝝓(a))    [...]
2     𝝓(c)              [ass]
      <hard struggle>
3     x                 [...]
4   x                   [existsE(1,2,3)]
```

### `forallE` (Forall Elimination)

From ∀x f(x) deduce f[x/c]

```
1   forall x. (f(x))    [...]
2   f(c)                [forallE(1)]
```

### `forall->E` (Forall Implication Elimination)

From ∀x f(x) -> g(x) and f(c), deduces g(c)

```
1   forall x. (f(x) -> g(x))    [...]
2   f(c)                        [...]
3   g(c)                        [forall->E(1,2)]
```

## Special

### `LEM` (Law of Excluded Middle)

From nothing deduce p / ~p

```
1   x / ~x      [LEM]
```

### `MT` (Modus Tollens)

From x -> y and ~y, deduce ~x

```
1   x -> y      [...]
2   ~y          [...]
3   ~x          [MT(1,2)]
```

### `PC` (Proof by Contradiction)

From "assuming x deduces F", deduce ~x

```
1     x         [...]
      <hard struggle>
2     F         [...]
3   ~x          [PC(1,2)]
```

### `refl` (rule of Reflection)

From nothing deduce x = x

```
1   x = x   [refl]
```

### `=sub` (Equality Substitution)

From a = b and f(a), deduce f(b)

```
1   a = b       [...]
2   f(a)        [...]
3   f(b)        [=sub(2,1)]
```

### `sym` (rule of Symmetry)

From a = b deduce b = a

```
1   a = b   [...]
2   b = a   [sym(1)]
```

### `forall I const`

Introduces a new free variable

```
1   c       [forall I const]
```

### `given` (Given)

Given proposition

```
1   x       [given]
```

### `premise` (Premise)

Given proposition

```
1   x       [premise]
```

### `ass` (Assumption)

Assume proposition / formula

```
1   x           [...]
2     x -> y    [ass]
3     result    [...]
4   conclusion  [...]
```

### `tick` (Tick)

From x deduce x (syntactic flag), see [syntax gotcha](/ndpc/syntax#gotchas) for more details

```
1   x           [...]
2     y         [...]
3     result1   [...]
4     result1   [tick(3)]   # Must tick here to signify ending of block
5     z         [...]
6     result2   [...]
7   conclusion  [...]
```

## Gotcha!

- Line numbers...

  - Comments and empty lines do _not_ increment line numbers!

  ```
  fai           [premise]
  -- I would like to make some comments...

  -- And maybe a line or two...
  foo(x)        [premise]

  foo(x)        [tick(2)] -- foo(x) is the second line of the proof!
  ```

  - This design ensures that you can change between a written proof and a ndpc verified proof relatively easily.

- When do I use the `tick` rule?

  - You can use it whenever you feel like to, but you _MUST_ use it if you are exiting a box, _AND_ your next line does not make it clear by deindenting. See below:

  ```
  bar(y)      [premise]
    x         [forall I const]
    -- hard struggle...
    foo(x)    [some reason]
  x -> foo(x) [...] -- This is valid because we deindented right after
  ```

  ```
  bar(y)      [premise]
    x         [forall I const]
    -- hard struggle...
    foo(x)    [some reason]
  -- This is not valid! We interuptted the indents
  x -> foo(x) [...]
  ```

  ```
  bar(y)      [premise]
    x         [forall I const]
    -- hard struggle...
    foo(x)    [some reason]
    foo(x)    [tick(42)]
  -- This _is_ valid! The box will exit cleanly because of the tick
  x -> foo(x) [...]
  ```

- Double negation...
  - Why can't I write `~~` to imply double negation?
  - This _might_ change in the future, but currently you have to write `~(~(x))`.
