# Toolchain support

Checkout full help by running `ndpc --help`

## Formatting

Run

```
ndpc format proof.ndp
```

The formatter is an uncompromising formatter, meaning that it will not respect what _you_ wrote, it will only format it in the way that it sees fit.

## Compiling to HTML

Run

```shell
ndpc compile --html proof.ndp
```

This will generate `proof.html`. You can style it however you want by passing `--css [FILE]`. Read the generated HTML to see the specific selectors involved.

[Example output](/ndpc/example_compile_out)

([you may have to reload if you see a 404](https://github.com/vuejs/vitepress/issues/4058))

## Compiling to Latex

```shell
ndpc compile --latex proof.ndp
```

The generated output uses [boxproof](https://github.com/YunkaiZhang233/boxproof/), make sure you follow the installation instructions there.

## Compiling to Typst

```shell
ndpc compile --typst proof.ndp
```

The relevant library is maintained [here](https://github.com/xiaoshihou514/boxproof-typst).

## Compiling to Lean

ndp proofs can be compiled to lean for formal verification.

```shell
ndpc compile --lean proof.ndp
lean proof.lean
```
