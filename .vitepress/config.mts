import { defineConfig } from "vitepress";
import { join } from "path";
import fs from "fs";

async function fetchSVG(url) {
  return fs.readFileSync(join(process.cwd(), url), "utf-8");
}

const sourcehut_svg = await fetchSVG("./public/binary/sourcehut.svg");
const codeberg_svg = await fetchSVG("./public/binary/codeberg.svg");
const gitlab_svg = await fetchSVG("./public/binary/gitlab.svg");

export default defineConfig({
  title: "xiaoshihou514",
  description: "xiaoshihou514's personal site",
  markdown: {
    theme: JSON.parse(fs.readFileSync("./.vitepress/moonlight.json", "utf8")),
    math: true,
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
          { text: "折腾历程", link: "/zh/cool" },
        ],
      },
    },
    ja: {
      label: "日本語",
      lang: "ja",
      themeConfig: {
        nav: [
          { text: "ホーム", link: "/ja" },
          { text: "ブログ", link: "/ja/blogs" },
          { text: "学道", link: "/ja/cool" },
        ],
      },
    },
  },
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Blogs", link: "/blogs" },
      { text: "History", link: "/cool" },
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
    socialLinks: [
      { icon: "github", link: "https://github.com/xiaoshihou514" },
      {
        icon: { svg: sourcehut_svg },
        link: "https://git.sr.ht/~xiaoshihou/",
        ariaLabel: "Sourcehut",
      },
      {
        icon: { svg: codeberg_svg },
        link: "https://codeberg.org/xiaoshihou/",
        ariaLabel: "Codeberg",
      },
      {
        icon: { svg: gitlab_svg },
        link: "https://gitlab.com/xiaoshihou/",
        ariaLabel: "Gitlab",
      },
    ],
    sidebar: {
      "/ndpc/": [
        {
          text: "Introduction",
          items: [
            { text: "Getting started", link: "/ndpc/getting-started" },
            { text: "Tutorial", link: "/ndpc/tutorial" },
          ],
        },
        {
          text: "Language Reference",
          link: "/ndpc/syntax",
        },
        {
          text: "Toolchain",
          link: "/ndpc/toolchain",
        },
      ],
      "/zh/ndpc/": [
        {
          text: "基础",
          items: [
            { text: "上手", link: "/zh/ndpc/getting-started" },
            { text: "教程", link: "/zh/ndpc/tutorial" },
          ],
        },
        {
          text: "语法手册",
          link: "/zh/ndpc/syntax",
        },
        {
          text: "工具链",
          link: "/zh/ndpc/toolchain",
        },
      ],
    },
  },
});
