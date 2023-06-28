import { navbar, sidebar } from "vuepress-theme-hope";

// 图标浏览https://remixicon.com/

export const Navbar = navbar([
    { text: "首页", icon: "home-3-line", link: "/" },
    { text: "杂项", icon: "file-copy-2-line", link: "/misc/" },
    { text: "博客", icon: "gps-line", link: "https://www.wozsun.com" },
]);

export const Sidebar = sidebar({
    "/misc/": "structure",
});