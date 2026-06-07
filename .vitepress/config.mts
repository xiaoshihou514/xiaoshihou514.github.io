import { defineConfig } from "vitepress";
import { join } from "path";
import fs from "fs";

async function fetchSVG(url) {
  return fs.readFileSync(join(process.cwd(), url), "utf-8");
}

const sourcehut_svg = await fetchSVG("./public/binary/sourcehut.svg");
const codeberg_svg = await fetchSVG("./public/binary/codeberg.svg");
const gitlab_svg = await fetchSVG("./public/binary/gitlab.svg");
const disroot_svg = await fetchSVG("./public/binary/disroot.svg");
const frama_svg = await fetchSVG("./public/binary/frama.svg");
const gitgud_svg = await fetchSVG("./public/binary/gitgud.svg");

export default defineConfig({
  title: "xiaoshihou514",
  description: "xiaoshihou514's personal site",
  ignoreDeadLinks: ["/ndpc/index", "/en/ndpc/docs/index", "/ndpc/example_compile_out"],
  markdown: {
    theme: JSON.parse(fs.readFileSync("./.vitepress/moonlight.json", "utf8")),
    math: true,
  },
  locales: {
    en: {
      label: "English",
      lang: "en",
      themeConfig: {
        nav: [
          { text: "Home", link: "/en" },
          { text: "Projects", link: "/en/projects" },
          { text: "Blogs", link: "/en/blogs" },
          { text: "History", link: "/en/cool" },
        ],
      },
    },
    zh: {
      label: "中文",
      lang: "zh",
      themeConfig: {
        nav: [
          { text: "首页", link: "/zh" },
          { text: "项目", link: "/zh/projects" },
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
          { text: "プロジェクト", link: "/ja/projects" },
          { text: "ブログ", link: "/ja/blogs" },
          { text: "学道", link: "/ja/cool" },
        ],
      },
    },
  },
  themeConfig: {
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
        icon: { svg: gitlab_svg },
        link: "https://gitlab.com/xiaoshihou/",
        ariaLabel: "Gitlab",
      },
      {
        icon: { svg: codeberg_svg },
        link: "https://codeberg.org/xiaoshihou/",
        ariaLabel: "Codeberg",
      },
      {
        icon: { svg: sourcehut_svg },
        link: "https://git.sr.ht/~xiaoshihou/",
        ariaLabel: "Sourcehut",
      },
      {
        icon: { svg: disroot_svg },
        link: "https://git.disroot.org/xiaoshihou",
        ariaLabel: "Disroot",
      },
      {
        icon: { svg: frama_svg },
        link: "https://framagit.org/xiaoshihou/",
        ariaLabel: "Frama",
      },
      {
        icon: { svg: gitgud_svg },
        link: "https://gitgud.io/xiaoshihou514/",
        ariaLabel: "Gitgud",
      },
    ],
    sidebar: {
      "/en/ndpc/docs/": [
        {
          text: "Introduction",
          items: [
            { text: "Getting started", link: "/en/ndpc/docs/getting-started" },
            { text: "Tutorial", link: "/en/ndpc/docs/tutorial" },
          ],
        },
        {
          text: "Language Reference",
          link: "/en/ndpc/docs/syntax",
        },
        {
          text: "Toolchain",
          link: "/en/ndpc/docs/toolchain",
        },
      ],
      "/zh/ndpc/docs/": [
        {
          text: "基础",
          items: [
            { text: "上手", link: "/zh/ndpc/docs/getting-started" },
            { text: "教程", link: "/zh/ndpc/docs/tutorial" },
          ],
        },
        {
          text: "语法手册",
          link: "/zh/ndpc/docs/syntax",
        },
        {
          text: "工具链",
          link: "/zh/ndpc/docs/toolchain",
        },
      ],
    },
  },
});
