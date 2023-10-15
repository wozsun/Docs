---
title: commit规范
icon: article-line
isOriginal: true
tag:
    - 未完成
description: 适用于本文档仓库的commit规范
---

## 编写背景

现有的commit规范都是根据代码仓库的需求制定的，许多类型并不适用于文档类型的仓库。为了使本文档仓库的commit历史一目了然且井然有序，遂制定适合本仓库的commit规范。

## 规范详情

- edit: 包含所有文章内容修改项目，包括目录页面的修改，可用的选项：
  - add: 文章/内容新增
  - del: 文章/内容删除
  - opt: 内容修改与优化，包括非错误的修改、重新排版、内容重组、标点优化等
  - fix: 错误修改，包括错别字、语法错误、标点符号错误等
  - sty: 样式修改，不涉及任何内容上的修改，包括字体样式、颜色、图片格式等
  - set: 配置修改，即Frontmatter的修改，以及分类/标签修改
  - meu: 目录页面修改，主要为目录页面README.md的修改

- set: 修改站点配置，可用的选项：
  - fun: 修改站点功能，例如开启GFM支持、开启评论等
  - ui: 修改站点外观，包括站点样式、非文章元素例如页眉、页脚等

- build: 修改构建相关文件，包括CI流程、项目依赖配置、仓库配置等，可用的选项：
  - ci: 修改CI流程
  - dep: 修改项目依赖配置

- revert: 返回到上次更改状态

选项应以**修改目的**为准。例如，为了优化文章而添加/删除了**部分**内容，应该使用`edit: opt`，而不是`edit: add/del`。

### 提交格式

```text
item1: option1, option2 & item2: option1, option2 - brief

description
```
