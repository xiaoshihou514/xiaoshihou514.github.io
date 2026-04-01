# 入门

## 安装

### 从 GitHub 发行版安装

安装ndpc最简单的方式为自[GitHub 发行页面](https://github.com/xiaoshihou514/ndpc/releases)下载现成的二进制文件。目前，发行版提供全平台JAR（需要安装JDK）和Linux可执行文件（可选Graal VM 或原生）。

### 自源码构建

如果没有为你的操作系统或架构的预编译二进制文件，又不想使用通用的 JAR 文件，可以选择从源代码构建。

你需要先安装[sbt](https://scala-sbt.org/)。

```bash
git clone https://github.com/xiaoshihou514/ndpc
cd ndpc
make release
```

## 第一个证明

现在，让我们在ndpc的帮助下创建并验证第一个证明吧 :)

1.  新建一个文件`example.ndp`，写入以下内容：
    ```
    x ^ y   [premise]
    x       [^E(1)]
    ```
2.  在终端运行命令：
    ```bash
    ndpc check example.ndp
    ```
3.  恭喜！你完成了第一个自然推理证明！

## 接下来可以做什么？

- **学习基础**：跟随 [教程](/zh/ndpc/docs/tutorial) 掌握核心概念。
- **查阅规则**：在 [这里](/zh/ndpc/docs/syntax) 查看 ndpc 支持的所有推理规则。如果你的证明被判定为无效，也许可以看看这份手册。
- **注意细节**：ndpc 有一些特定的语法约定，在编写复杂证明前，建议先 [阅读此部分](/zh/ndpc/docs/syntax#重要说明！) 。
- **探索功能**：尝试使用 ndpc 提供的其他 [实用功能](/zh/ndpc/docs/toolchain)，尤其是代码格式化和导出为多种格式的能力。
