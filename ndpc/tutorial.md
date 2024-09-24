# Basic syntax

## Try it yourself

We have seen how simple proofs work, you write down the premise, deduce more formulas using some rules, until arrive at the conclusion.

Write the proof for the following question to make sure you have got the hang of it!

::: tip Exercise 1
Prove that the sequent p, p -> q, p -> (q -> r) ⊢ r is valid.
:::

To prove this we need to use `implication elimination`.

```
p              [premise]
p -> q         [premise]
p -> (q -> r)  [premise]
q              [->E(1,2)]
```

Complete the proof yourself!

:::details answer

```
p              [premise]
p -> q         [premise]
p -> (q -> r)  [premise]
q              [->E(1,2)]
q -> r         [->E(1,3)]
r              [->(4,5)]
```

:::

## Boxes

To prove more complex assertions, we have to use `boxes` to make assumptions. For example, to use `implication introduction` to prove `p -> q`, you have to assume p and deduce q in that box.

In `ndp` files, we create boxes by indents, as an example:

```
p       [premise]
  -- indent size must be 2!
  -- Did I mention that we can write comments?
  p     [ass]   -- ass stands for assumption
  p     [tick(2)]
p -> p  [->I(2,3)]
```

A slightly harder example:

:::tip Example 1
Prove that (p ^ q) -> r ⊢ p -> (q -> r)
:::

```
(p ^ q) -> r        [premise]
  p                 [ass]
    q               [ass]
    p ^ q           [^I(2,3)]
    r               [->E(1,4)]
  q -> r            [->I(3,5)]
p -> (q -> r)       [->I(2,6)]
```

I'm sure you know how it works now, why not prove that the opposite is true as well? That is:

:::tip Exercise 2
Prove that p -> (q -> r) ⊢ (p ^ q) -> r
:::

:::details answer

```
p              [premise]
p -> q         [premise]
p -> (q -> r)  [premise]
q              [->E(1,2)]
q -> r         [->E(1,3)]
r              [->(4,5)]
```

:::

## What next?

Believe it or not, that's basically all you have to know to prove propositional _and_ first order logic!

I'm sure you are on a hurry, but if you have time (or you encountered some problems), read the following:

- ndpc has a few syntax particularities, please about them [here](/ndpc/syntax-gotchas) before opening an issue.
- Get a peek at what rules does ndpc support [here](/ndpc/rules). Check this if ndpc thinks your proof is not valid :)
- Leverage other shiny capabilities of ndpc, such as [formatting](/ndpc/toolchain) and [generating pretty html](/ndpc/toolchain).
