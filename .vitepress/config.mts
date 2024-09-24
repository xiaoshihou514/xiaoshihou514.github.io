import { defineConfig } from "vitepress";
import fs from "fs";

export default defineConfig({
  title: "xiaoshihou514",
  description: "xiaoshihou514's personal site",
  markdown: {
    theme: JSON.parse(fs.readFileSync("./.vitepress/moonlight.json", "utf8")),
  },
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Blogs", link: "/blogs" },
    ],
    search: { provider: "local" },
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
            { text: "Additional toolchain support", link: "/ndpc/toolchain" },
          ],
        },
      ],
    },
  },
});
