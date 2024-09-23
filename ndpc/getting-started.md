# Getting started

## Installation
### From Github Releases
The easiest way of installing ndpc is from [github releases](https://github.com/xiaoshihou514/ndpc/releases), simply download the executable for your platform and add it to your path variable.

### Build from source
If a binary release is not provided for your OS / architecture, you can build it from source.

You need to have [git](https://git-scm.com/) and [scala](https://scala-lang.org) installed
```bash
git clone https://github.com/xiaoshihou514/ndpc
cd ndpc
scala compile . -d .
```
By default, ndpc is built with [scala-native](https://scala-native.org), you can build a JVM artifact by deleting the following lines in `project.scala`:
```scala
//> using platform native
//> using nativeVersion 0.4.17
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
ndpc example.ndp
```
- Et voilà! There's our first proof, baked and verified.

## What's next?
- Build more complex proofs with [scoping](/ndpc/scoping), the boxes used for making assumptions.
- ndpc has a few syntax particularities, please read them [here](/ndpc/syntax-notes) before writing more complex proofs. Don't worry, your proof won't be that different from what you are used to seeing on the slides!
- Get a peek at what rules does ndpc support [here](/ndpc/rules). Check this if ndpc thinks your proof is not valid :)
- Leverage other shiny capabilities of ndpc, say [formatting](/ndpc/formatting) and [generating pretty html](/ndpc/compiling)?
