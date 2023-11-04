---
title: Linux垃圾清理
icon: article-line
isOriginal: true
tag:
    - 未完成
description: Linux服务器上部分垃圾文件清理
---

## 软件清理

```sh
apt autoclean              清理旧版本的软件缓存
apt autoremove             清理不再需要的软件包
```

## 内核清理

```sh
# 首先要使用这个命令查看当前Ubuntu系统使用的内核
uname -a

# 再查看所有内核
dpkg --get-selections|grep linux

# 删除旧内核和头文件，xxxxx代表内核版本号。下面列出的是可以删除的类型，具体删除还是看上一步的列出项是啥。
# 注意：千万不要删除正在运行的内核，即不要删除第一步列出的内核版本号。
apt remove linux-image-xxxxxx-generic
apt remove linux-headers-xxxxxx-generic
apt remove linux-image-xxxxxx-generic
apt remove linux-modules-xxxxxx-generic
apt remove linux-modules-extra-xxxxxx-generic
# 状态为`deinstall`即已经卸载，如果觉得看着不舒服的话可以使用`purge`连配置文件一起彻底删除，清理内核列表。

# 删除内核后需要更新 grub 移除失效的启动项
update-grub
```
