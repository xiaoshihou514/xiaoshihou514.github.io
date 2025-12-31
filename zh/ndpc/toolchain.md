# 工具链支持

运行`ndpc --help`可以查看完整的帮助信息。

## 代码格式化

运行以下命令格式化证明文件：

```
ndpc format proof.ndp
```

这个格式化工具没有妥协性，这意味着它不会保留你原有的代码风格，而是会按照预设的规则重新格式化整个文件。

## 编译为 HTML

运行以下命令将证明文件编译为 HTML：

```shell
ndpc compile --html proof.ndp
```

这将会生成 `proof.html` 文件。你还可以通过 `--css [文件]` 参数指定自定义的CSS样式文件。查看生成的 HTML 文件可以了解具体的CSS选择器用法。

[查看示例输出](/ndpc/example_compile_out)

(如果遇到404错误，可能需要重新加载页面，[工单](https://github.com/vuejs/vitepress/issues/4058))

## 编译为 LaTeX

```shell
ndpc compile --latex proof.ndp
```

生成的LaTeX代码使用了[boxproof](https://github.com/YunkaiZhang233/boxproof/)包，参见该项目的说明。

## 编译为 Typst

```shell
ndpc compile --typst proof.ndp
```

[Typst库](https://github.com/xiaoshihou514/boxproof-typst)。

## 编译为 Lean

ndp证明可以编译为Lean代码，以便进行形式化验证。

```shell
ndpc compile --lean proof.ndp
lean proof.lean
```
