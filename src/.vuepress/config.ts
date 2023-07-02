import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";
export default defineUserConfig({
  theme,
  base: "/kiki/",

  locales: {
    "/en/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/": {
      lang: "zh-CN",
      title: "Kiki",
      description: "kiki的博客",
    },
  },
  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索",
        },
        "/en/": {
          placeholder: "search",
        },
      }
    }),
  ],


  // Enable it with pwa
  // shouldPrefetch: false,
});
