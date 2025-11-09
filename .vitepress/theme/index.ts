// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { useData, useRoute } from "vitepress";
import { toRefs } from "vue";
import giscusTalk from "vitepress-plugin-comment-with-giscus";
import "./style.css";
import "./custom.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
  setup() {
    // Get frontmatter and route
    const { frontmatter } = toRefs(useData());
    const route = useRoute();

    // Obtain configuration from: https://giscus.app/
    giscusTalk(
      {
        repo: "xiaoshihou514/xiaoshihou514.github.io",
        repoId: "R_kgDOMLz41w",
        category: "Announcements",
        categoryId: "DIC_kwDOMLz4184CxmYO",
        mapping: "pathname",
        inputPosition: "bottom",
        lang: "zh-CN",
        locales: {
          zh: "zh-CN",
          en: "en",
        },
        homePageShowComment: false,
        lightTheme: "preferred_color_scheme",
        darkTheme: "preferred_color_scheme",
        strict: false,
        reactionsEnabled: true,
      },
      {
        frontmatter,
        route,
      },
      false,
    );
  },
} satisfies Theme;
