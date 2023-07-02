import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "博文",
    link: "/posts/",
    icon: "lightbulb",
    activeMatch: "^/posts/$",
  },

]);
