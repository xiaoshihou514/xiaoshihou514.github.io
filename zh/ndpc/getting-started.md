# 入门

## 安装

### 从 GitHub 发行版安装

这是安装ndpc最简单的方式：直接前往 [GitHub 发行版页面](https://github.com/xiaoshihou514/ndpc/releases)，根据你的系统平台下载对应的可执行文件，然后将其所在目录添加到系统的PATH环境变量中即可。

如果你的系统平台没有提供现成的二进制文件，可以尝试使用`ndpc.jar`（依赖JDK）。

### 从源代码构建

如果你的操作系统或架构没有提供预编译的发行版，又不想使用通用的 JAR 文件，可以选择从源代码构建。

你需要先安装[git](https://git-scm.com/)和[Scala](https://scala-lang.org)编译器（通常需要最新稳定发行版）。

```bash
git clone https://github.com/xiaoshihou514/ndpc
cd ndpc
# 构建原生可执行文件
scala --power package . --native --native-mode release-full --force -o ndpc
# 构建JAR包
scala --power package . --assembly --force -o ndpc.jar
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

- **学习基础**：跟随 [教程](/zh/ndpc/tutorial) 掌握核心概念。
- **查阅规则**：在 [这里](/zh/ndpc/syntax) 查看 ndpc 支持的所有推理规则。如果你的证明被判定为无效，也许可以看看这份手册。
- **注意细节**：ndpc 有一些特定的语法约定，在编写复杂证明前，建议先 [阅读此部分](/zh/ndpc/syntax#gotcha) 了解。别担心，这和你通常在课件上看到的证明格式不会相差太大！
- **探索功能**：尝试使用 ndpc 提供的其他 [实用功能](/zh/ndpc/toolchain)，尤其是代码格式化和导出为多种格式的能力。
