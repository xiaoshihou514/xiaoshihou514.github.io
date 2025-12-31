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
p -> (q -> r)  [premise]
  p ^ q        [ass]
  p            [^E(2)]
  q            [^E(3)]
  q -> r       [->E(1,3)]
  r            [->E(5,4)]
(p ^ q) -> r   [->I(2,6)]
```

:::

## More boxes

Most rules works like what we showed above, except or elimination. Here's an example, p -> r, q -> r, p ∨ q ⊢ r

```
p -> r  [premise]
q -> r  [premise]
p ∨ q   [premise]
  p     [ass]
  r     [->E(1,4)]
  -- mandatory, separates the 2 cases
  r     [tick(5)]
  -- now begins the q case
  q     [ass]
  r     [->E(2,7)]
r       [/E(3,4,6,7,8)]
```

## What next?

Believe it or not, that's basically all you have to know to prove propositional _and_ first order logic!

For more reference:

- ndpc has a few syntax particularities, please about them [here](/ndpc/syntax#gotchas) before opening an issue.
- Get a peek at what rules does ndpc support [here](/ndpc/syntax). Check this if ndpc thinks your proof is not valid :)
