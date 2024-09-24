# Gotcha!

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
