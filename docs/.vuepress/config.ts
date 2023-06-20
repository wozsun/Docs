import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { Navbar, Sidebar } from "./bar";

export default defineUserConfig({
    lang: "zh-CN",
    title: "Docs",
    description: "知识星球",
    head: [
        ["link", { rel: "icon", href: "https://asset.wozsun.com/wozsun.svg" }],
        ["meta", { name: "theme-color", content: "#1874ca" }],
    ],
    shouldPrefetch: false,
    dest: "public",
    theme: hopeTheme({
        hostname: "https://docs.wozsun.com",
        author: {
            name: "wozsun",
            url: "https://code.wozsun.com/me",
            email: "master@wozsun.com",
        },
        iconAssets: [ // 图标浏览https://remixicon.com/
            "https://at.alicdn.com/t/c/font_4128793_d0rhm36922l.css",
            "https://asset.wozsun.com/remixicon/remixicon.css",
        ],
        iconPrefix: "ri-",
        logo: "https://asset.wozsun.com/wozsun.svg",
        repo: "https://code.wozsun.com/docs/docs.wozsun.com/",
        navbarLayout: {
            start: ["Brand"],
            center: ["Links"],
            end: ["Repo", "Outlook"],
        },
        hotReload: true,
        pageInfo: ["Date", "Word", "ReadingTime", "Category", "Tag"],
        darkmode: "toggle",
        contributors: false,
        docsBranch: "main",
        docsDir: "docs",
        navbar: Navbar,
        sidebar: Sidebar,
        displayFooter: true,
        copyright: false,
        footer: "Copyright © 2022-2023 wozsun",
        plugins: {
            pwa: true,
            git: true,
            components: {
                components: [
                    "Badge",
                ],
            },
            mdEnhance: {
                gfm: true,
                tabs: true,
                codetabs: true,
                mermaid: true,
                katex: true,
                sup: true,
                sub: true,
                tasklist: true,
                card: true,
                imgLazyload: true,
                include: true,
                mark: true,
                footnote: true,
                align: true,
                stylize: [
                    {
                        matcher: "Recommanded",
                        replacer: ({ tag }) => {
                            if (tag === "em")
                                return {
                                    tag: "Badge",
                                    attrs: { type: "tip" },
                                    content: "Recommanded",
                                };
                        },
                    },
                ],
            },
        },
    }),
});