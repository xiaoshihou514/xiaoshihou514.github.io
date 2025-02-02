import { defineConfig } from "vitepress";
import fs from "fs";

export default defineConfig({
  title: "xiaoshihou514",
  description: "xiaoshihou514's personal site",
  markdown: {
    theme: JSON.parse(fs.readFileSync("./.vitepress/moonlight.json", "utf8")),
  },
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    zh: {
      label: "中文",
      lang: "zh",
      themeConfig: {
        nav: [
          { text: "首页", link: "/zh" },
          { text: "博客", link: "/zh/blogs" },
        ],
      },
    },
  },
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Blogs", link: "/blogs" },
    ],
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索",
                buttonAriaLabel: "搜索",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      },
    },
    socialLinks: [{ icon: "github", link: "https://github.com/xiaoshihou514" }],
    sidebar: {
      "/ndpc/": [
        {
          text: "Ndpc",
          items: [
            { text: "Getting started", link: "/ndpc/getting-started" },
            { text: "Tutorial", link: "/ndpc/tutorial" },
            {
              text: "Gotcha! Notes about syntax",
              link: "/ndpc/syntax-gotchas",
            },
            { text: "List of supported rules", link: "/ndpc/rules" },
            { text: "Specification for every rule", link: "/ndpc/rules-spec" },
            { text: "Additional toolchain support", link: "/ndpc/toolchain" },
          ],
        },
      ],
    },
  },
});
