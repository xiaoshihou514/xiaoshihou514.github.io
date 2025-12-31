# Getting started

## Installation

### From Github Releases

The easiest way of installing ndpc is from [github releases](https://github.com/xiaoshihou514/ndpc/releases), simply download the executable for your platform and add it to your path variable. If the binary for your machine is absent, try `ndpc.jar`, you will need a JDK to run it tho.

### Build from source

If a binary release is not provided for your OS / architecture but you don't want to use the universal jar, you can build it from source.

You need to have [git](https://git-scm.com/) and [scala](https://scala-lang.org) `3.5+` installed

```bash
git clone https://github.com/xiaoshihou514/ndpc
cd ndpc
scala --power package . --native --native-mode release-full --force -o ndpc
# Or for jar
scala --power package . --assembly --force -o ndpc.jar
```

## The first proof

Let's create and verify our first proof with the help of ndpc :)

- In a new file, say `example.ndp`, write the content below.

```
x ^ y   [premise]
x       [^E(1)]
```

- Run the following command:

```bash
ndpc check example.ndp
```

- Et voilà! There's our first proof, baked and verified.

## What's next?

- Follow [the tutorial](/ndpc/tutorial) to learn the basics!
- Get a peek at what rules does ndpc support [here](/ndpc/syntax). Check this if ndpc thinks your proof is not valid :)
- ndpc has a few syntax particularities, please read them [here](/ndpc/syntax#gotcha) before writing more complex proofs. Don't worry, your proof won't be that different from what you are used to seeing on the slides!
- Leverage other [shiny capabilities](/ndpc/toolchain) of ndpc, specifically formatting and exporting to a number of formats.
