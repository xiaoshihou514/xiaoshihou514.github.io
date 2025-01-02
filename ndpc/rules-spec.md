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

### `->E` (Emplication Elimination)

### `/E` (Or Elimination)

### `~E` (Not Elimination)

### `~~E` (Double Negation Elimination)

### `FE` (Falsity Elimination)

### `<->E` (Equivalence Elimination)

### `existsE` (Exists Elimination)

### `forallE` (Forall Elimination)

### `forall->E` (Forall Implication Elimination)

## Special

### `LEM` (Law of Excluded Middle)

### `MT` (Modus Tollens)

### `PC` (Proof by Contradiction)

### `refl` (rule of Reflection)

### `=sub` (Equality Substitution)

### `sym` (rule of Symmetry)

### `forall` (I const forall I const)

### `given` (Given)

### `premise` (Premise)

### `ass` (Assumption)

### `tick` (Tick)
