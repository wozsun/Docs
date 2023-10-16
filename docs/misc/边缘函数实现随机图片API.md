---
title: 边缘函数实现随机图片API
shortTitle: 随机图片API
icon: article-line
isOriginal: true
tag:
    - 未完成
    - 脚本
description: 利用腾讯云边缘函数实现随机图片API功能
---

## 完整代码

```javascript
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {

    const hostname = new URL(request.url).hostname;
    let response = new Response('Not Found', { status: 404 });

    //预留拓展
    if (hostname == 'api.example.com') {response = await handleAPI(request); }
    //其他处理函数

    return response;
}

//API域名处理
async function handleAPI(request) {

    let url = new URL(request.url);
    let response = new Response('Not Found', { status: 404 });

    //根据路径执行不同操作
    if (url.pathname === '/random-img') {
        response = await handleRandomImg(request);
    }

    //CORS配置，允许所有跨域请求
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', '*');
    response.headers.set('Access-Control-Max-Age', '7200');

    /*
    //根据Origin和Referer设置跨域请求
    const origin = request.headers.get('Origin');
    const referer = request.headers.get('Referer');
    if (origin && origin.endsWith('example.com')) {
        response.headers.set('Access-Control-Allow-Origin', request.headers.get('Origin'));
        response.headers.set('Access-Control-Allow-Methods', '*');
        response.headers.set('Access-Control-Max-Age', '7200');
        response.headers.set('Access-Control-Allow-Credentials', 'true');
    } else if (!origin && referer && referer.includes('example.com')) {
        response.headers.set('Access-Control-Allow-Origin', '*');
        response.headers.set('Access-Control-Allow-Methods', '*');
        response.headers.set('Access-Control-Max-Age', '7200');
    }
    */

    return response;
}

async function handleRandomImg(request) {

    let url = new URL(request.url);

    const folderMap = {
        'pc-dark': { type: 'pc', theme: 'dark', max: 10 },
        'pc-light': { type: 'pc', theme: 'light', max: 10 },
        'mb-dark': { type: ['mobile', 'mb'], theme: 'dark', max: 10 },
        'mb-light': { type: ['mobile', 'mb'], theme: 'light', max: 10 },
    };
    let params = url.searchParams;
    let type = params.getAll('type');
    let theme = params.getAll('theme');

    //检查参数是否合法
    for (let key of params.keys()) {
        if (key !== 'type' && key !== 'theme') {
            return new Response('Bad Request', { status: 400 });
        }
    }

    //检查参数是否重复
    if (type.length > 1 || theme.length > 1) {
        return new Response('Bad Request', { status: 400 });
    }

    //通过User-Agent判断设备类型
    let userAgent = request.headers.get('User-Agent');
    let isMobile = /Mobi|Android|iPhone/i.test(userAgent);

    if (type.length === 1 && theme.length === 0) {
        type = type[0];
        theme = Math.random() < 0.5 ? 'dark' : 'light';
    } else if (type.length === 0 && theme.length === 1) {
        theme = theme[0];
        type = isMobile ? 'mb' : 'pc';
    } else if (type.length === 1 && theme.length === 1) {
        type = type[0];
        theme = theme[0];
    } else {
        type = isMobile ? 'mb' : 'pc';
        theme = Math.random() < 0.5 ? 'dark' : 'light';
    }

    //根据参数获取文件夹名
    let folder;
    for (let [key, value] of Object.entries(folderMap)) {
        if ((Array.isArray(value.type) ? value.type.includes(type) : value.type === type) && value.theme === theme) {
            folder = key;
            break;
        }
    }
    //如果参数没有对应的文件夹，则返回400
    if (!folder) {return new Response('Bad Request', { status: 400 });}

    let maxImageNumber = folderMap[folder].max;
    let imageNumber = Math.floor(Math.random() * maxImageNumber) + 1;
    let imageUrl = `https://example.com/random-img/${folder}/${imageNumber}.webp`;

    return Response.redirect(imageUrl, 302);
}
```
