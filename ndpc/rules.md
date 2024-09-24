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
|   TI    |      Truth Introduction      |     from nothing deduces T (but why would you do that?)     |
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
|  forallE  |       Forall Elimination       |                         from ∀x f deduce f[x/c]                          |
| forall->E | Forall Implication Elimination |               from ∀x f(x) -> g(x) and f(c), deduces g(c)                |

## Special

|     Symbol     |         Reads          |            Argument Semantics            |
| :------------: | :--------------------: | :--------------------------------------: |
|      LEM       | Law of Excluded Middle |        from nothing deduce p / ~p        |
|       MT       |     Modus Tollens      |      from x -> y and ~y, deduce ~x       |
|       PC       | Proof by Contradiction |  from "assuming x deduces F", deduce ~x  |
|      refl      |   rule of Reflection   |        from nothing deduce x = x         |
|      =sub      | Equality Substitution  |     from a = b and f(a), deduce f(b)     |
|      sym       |    rule of Symmetry    |         from a = b deduce b = a          |
| forall I const |     forall I const     |      introduces a new free variable      |
|     given      |         Given          |       given proposition / formula        |
|    premise     |        Premise         |       given proposition / formula        |
|      ass       |       Assumption       |       assume proposition / formula       |
|      tick      |          Tick          | from x deduce x (to improve readability) |
