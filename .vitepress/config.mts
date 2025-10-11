import { defineConfig } from "vitepress";
import fs from "fs";

async function fetchSVG(url) {
  const response = await fetch(url);
  return response.text();
}

const sourcehut_svg = await fetchSVG("https://sourcehut.org/sourcehut.svg");
const codeberg_svg = await fetchSVG(
  "https://codeberg.org/Codeberg/Design/raw/branch/main/logo/icon/svg/codeberg-logo_icon_blue.svg",
);
const gitlab_svg = await fetchSVG(
  "https://companieslogo.com/img/orig/GTLB-6b2d0bd2.svg?t=1752297942&download=true",
);

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
          { text: "道のり", link: "/ja/cool" },
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
