import { defineUserConfig } from "vuepress";
import { hopeTheme, navbar, sidebar } from "vuepress-theme-hope";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";

// 图标浏览https://remixicon.com/

export const Navbar = navbar([
    { text: "首页", icon: "home-3-line", link: "/" },
    { text: "杂项", icon: "file-copy-2-line", link: "/misc/" },
    { text: "个人主页", icon: "gps-line", link: "https://www.wozsun.com" },
]);

export const Sidebar = sidebar({
    "/misc/": "structure",
});

export default defineUserConfig({
    base: "/",
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
            url: "https://wozsun.com",
            email: "master@wozsun.com",
        },
        favicon: "https://asset.wozsun.com/wozsun.svg",
        logo: "https://asset.wozsun.com/wozsun.svg",
        logoDark: "https://asset.wozsun.com/wozsun.svg",
        repo: "https://github.com/wozsun/Docs",
        repoDisplay: true,
        repoLabel: "GitHub",
        hideSiteNameOnMobile: true,
        navbar: Navbar,
        navbarIcon: true,
        navbarLayout: {
            start: ["Brand"],
            center: ["Links"],
            end: ["Repo", "Outlook", "Search"],
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
        pageInfo: ["Original", "Word", "ReadingTime", "Category", "Tag"],
        lastUpdated: true,
        contributors: false,
        editLink: true,
        editLinkPattern: ":repo/-/edit/:branch/:path",
        docsRepo: "https://code.wozsun.com/docs/docs.wozsun.com",
        docsBranch: "main",
        docsDir: "docs",
        displayFooter: true,
        copyright: "<b>CC BY-NC-SA 4.0 | Copyright © 2022-2023 wozsun</b>",
        rtl: false,
        toc: true,
        iconAssets: [
            "https://at.alicdn.com/t/c/font_4128793_d0rhm36922l.css",
            "https://asset.wozsun.com/remixicon/remixicon.css"
        ],
        iconPrefix: "ri-",
        darkmode: "switch",
        fullscreen: false,
        backToTop: true,
        pure: false,
        print: true,
        encrypt: {
            global: false,
            admin: [],
            config: {},
        },
        plugins: {
            git: true,
            nprogress: true,
            prismjs: true,
            photoSwipe: {
                scrollToClose: true,
                delay: 800,
            },
            readingTime: {
                wordPerMinute: 300,
            },
            seo: true,
            sitemap: true,
            copyright: {
                global: false,
                author: "wozsun",
                license: "CC BY-NC-SA 4.0",
                triggerLength: 300,
                disableCopy: false,
                disableSelection: false,
            },
            blog: {
                excerpt: true,
                excerptSeparator: "<!-- absrtact -->",
                excerptLength: 0,
                type: [],
                article: "/article/",
                category: "/category/",
                categoryItem: "/category/:name",
                tag: "/tag/",
                tagItem: "/tag/:name",
                star: "/star/",
                timeline: "/timeline/",
                hotReload: true,
            },
            copyCode: {
                showInMobile: true,
                duration: 2000,
                fancy: false,
                delay: 800,
            },
            components: {
                components: ["Badge"],
                componentOptions: {},
            },
            comment: {
                provider: "Giscus",
                comment: true,
                repo: "wozsun/Docs",
                repoId: "R_kgDOJ2pUrA",
                category: "General",
                categoryId: "DIC_kwDOJ2pUrM4CXquq",
                mapping: "pathname",
                strict: true,
                lazyLoading: true,
                reactionsEnabled: true,
                inputPosition: "top",
                lightTheme: "light",
                darkTheme: "dark",
            },
            mdEnhance: {
                gfm: true,
                hint: true,
                checkLinks: { status: "dev" },
                tabs: true,
                codetabs: true,
                attrs: false,
                figure: false,
                mermaid: false,
                katex: false,
                mathjax: false,
                chart: false,
                echarts: false,
                revealJs: false,
                delay: 800,
                sup: true,
                sub: true,
                tasklist: true,
                demo: false,
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
            autoCatalog: {
                level: 3,
                index: false,
                exclude: [],
            },
        },
        blog: {
            sidebarDisplay: "none",
            avatar: "https://asset.wozsun.com/avatar.webp",
            roundAvatar: true,
            name: "wozsun",
            description: "欲买桂花同载酒，终不似，少年游",
            medias: {
                GitHub: "https://github.com/wozsun",
                Telegram: "https://t.me/wozsun",
                Email: "mailto:master@wozsun.com",
            },
        },
    }),
    plugins: [
        docsearchPlugin({
            appId: "F1UGFIIFKP",
            apiKey: "cd0f6b45036ffeec7c021f9f69790cfb",
            indexName: "wozsun",
            placeholder: "搜索文档",
            disableUserPersonalization: false,
            injectStyles: true,
            translations: {
                button: {
                    buttonText: "搜索文档",
                    buttonAriaLabel: "搜索文档",
                },
                modal: {
                    searchBox: {
                        resetButtonTitle: "清除查询条件",
                        resetButtonAriaLabel: "清除查询条件",
                        cancelButtonText: "取消",
                        cancelButtonAriaLabel: "取消",
                    },
                    startScreen: {
                        recentSearchesTitle: "搜索历史",
                        noRecentSearchesText: "没有搜索历史",
                        saveRecentSearchButtonTitle: "保存至搜索历史",
                        removeRecentSearchButtonTitle: "从搜索历史中移除",
                        favoriteSearchesTitle: "收藏",
                        removeFavoriteSearchButtonTitle: "从收藏中移除",
                    },
                    errorScreen: {
                        titleText: "无法获取结果",
                        helpText: "你可能需要检查你的网络连接",
                    },
                    footer: {
                        selectText: "选择",
                        selectKeyAriaLabel: "回车键",
                        navigateText: "切换",
                        navigateUpKeyAriaLabel: "向上箭头",
                        navigateDownKeyAriaLabel: "向下箭头",
                        closeText: "关闭",
                        closeKeyAriaLabel: "Esc键",
                        searchByText: "搜索提供者",
                    },
                    noResultsScreen: {
                        noResultsText: "无法找到相关结果",
                        suggestedQueryText: "你可以尝试查询",
                        reportMissingResultsText: "你认为该查询应该有结果？",
                        reportMissingResultsLinkText: "点击反馈",
                    },
                },
            },
        }),
    ],
});