import { navbar,sidebar } from "vuepress-theme-hope";

export const Navbar = navbar([
    { text: "首页", icon: "home-3-line", link: "/" },
    { text: "博客", icon: "gps-line", link: "https://www.wozsun.com" },
]);

export const Sidebar = sidebar({
    //自动侧边栏目录
    // "/java/": "structure",
});