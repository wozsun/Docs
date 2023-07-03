import { defineUserConfig } from "vuepress";
import { hopeTheme, navbar, sidebar } from "vuepress-theme-hope";

// 图标浏览https://remixicon.com/

export const Navbar = navbar([
    { text: "首页", icon: "home-3-line", link: "/" },
    { text: "杂项", icon: "file-copy-2-line", link: "/misc/" },
    { text: "博客", icon: "gps-line", link: "https://www.wozsun.com" },
]);

export const Sidebar = sidebar({
    "/misc/": "structure",
});

export default defineUserConfig({
    lang: "zh-CN",
    title: "Docs",
    description: "知识星球",
    head: [
        ["meta", { name: "theme-color", content: "#1874ca" }],
    ],
    shouldPrefetch: false,
    dest: "public",
    theme: hopeTheme({
        hotReload: true,
        hostname: "https://docs.wozsun.com",
        author: {
            name: "wozsun",
            url: "https://code.wozsun.com/me",
            email: "master@wozsun.com",
        },
        favicon: "https://asset.wozsun.com/wozsun.svg",
        logo: "https://asset.wozsun.com/wozsun.svg",
        logoDark: "https://asset.wozsun.com/wozsun.svg",
        repo: "https://code.wozsun.com/docs/docs.wozsun.com",
        repoDisplay: true,
        repoLabel: "GitLab",
        hideSiteNameOnMobile: true,
        navbar: Navbar,
        navbarIcon: true,
        navbarLayout: {
            start: ["Brand"],
            center: ["Links"],
            end: ["Repo", "Outlook"],
        },
        navTitle: "Docs",
        navbarAutoHide: "mobile",
        sidebar: Sidebar,
        sidebarIcon: true,
        sidebarSorter: ["readme", "order", "title", "filename"],
        headerDepth: 2,
        breadcrumb: true,
        breadcrumbIcon: true,
        prevLink: true,
        nextLink: true,
        titleIcon: true,
        pageInfo: ["Date", "Word", "ReadingTime", "Category", "Tag"],
        lastUpdated: true,
        contributors: false,
        editLink: true,
        editLinkPattern: ":repo/-/edit/:branch/:path",
        docsRepo: "https://code.wozsun.com/docs/docs.wozsun.com",
        docsBranch: "main",
        docsDir: "docs",
        displayFooter: true,
        copyright: false,
        footer: "<a href='https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh' target='_blank'>CC BY-NC-SA 4.0</a><br><a href='https://docs.wozsun.com'>Docs</a> | <a href='https://docs-wozsun.vercel.app'>Vercel</a> | <a href='https://docs-wozsun.netlify.app'>Netlify</a><br><b>Copyright © 2022-2023 wozsun</b>",
        rtl: false,
        toc: true,
        iconAssets: [
            "https://at.alicdn.com/t/c/font_4128793_d0rhm36922l.css",
            "https://asset.wozsun.com/remixicon/remixicon.css",
        ],
        iconPrefix: "ri-",
        darkmode: "switch",
        fullscreen: false,
        backToTop: true,
        pure: false,
        print: true,
        plugins: {
            blog: true,
            git: true,
            nprogress: true,
            prismjs: true,
            photoSwipe: true,
            readingTime: true,
            seo: true,
            sitemap: true,
            copyCode: {
                selector: '.theme-default-content div[class*="language-"] pre',
                showInMobile: true,
                duration: 1500,
                // pure: false,
                delay: 800,
            },
            components: {
                components: [
                    "Badge",
                ],
            },
            mdEnhance: {
                gfm: true,
                container: true,
                checkLinks: { status: "dev" },
                tabs: true,
                codetabs: true,
                attrs: false,
                figure: false,
                mermaid: true,
                katex: true,
                mathjax: false,
                chart: false,
                echarts: false,
                presentation: false,
                delay: 800,
                sup: true,
                sub: true,
                tasklist: true,
                demo: false,
                card: true,
                imgLazyload: true,
                imgMark: false,
                imgSize: false,
                obsidianImgSize: false,
                include: true,
                mark: true,
                footnote: true,
                align: true,
                vuePlayground: false,
                playground: { presets: [], config: {} },
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
            pwa: {
                manifest: {
                    theme_color: "#1874ca",
                },
                favicon: "https://asset.wozsun.com/wozsun.svg",
                maxSize: 2048,
                cacheHTML: false,              
                cachePic: true,
                maxPicSize: 2048,
                update: "hint",
                apple: {
                    icon: "https://asset.wozsun.com/wozsun.svg",
                    statusBarColor: "black",
                    maskIcon: "https://asset.wozsun.com/wozsun.svg",
                }
            },
        },
        blog: {
            sidebarDisplay: "none",
            avatar: "https://asset.wozsun.com/avatar.webp",
            name: "wozsun",
            medias: {
                GitHub: "https://github.com/wozsun",
                Telegram: "https://t.me/wozsun",
                Email: "mailto:master@wozsun.com",
            },
        },
    }),
});