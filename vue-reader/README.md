# vue-reader

> A Vue.js project

## 大概步骤

### 下载或自行生成图标等需要的icon。

本项目的全部在assets/styles下

### 设置viewport

设定手机端的阅读器缩放

### 引入reset.scss(直接下载)和 global.scss(实现px和rem的转换)

本项目的在assets/styles下

reset.scss 消除不同浏览器默认样式的不一致性

global.scss 规定了站点的公共样式，公共方法和参数

### 实现epub书籍解析 设计文件Ebbok.vue和 router/index.js

npm install epubjs --save-dev

首先为了正确下载，需要更改vue-router的mode未history

具体文件在Ebook.vue

### 实现翻页功能 Ebook.vue

添加一个div遮盖在书的显示界面上，通过划分为三个不同的div并且调用epubjs内置方法实现翻页。

### 实现点击中间div标题栏和菜单栏 Ebook.vue global.scss TitleBar MenuBar

添加标题栏的div布局，为图标在global中添加默认样式.两个功能模块分别拆分到两个vue文件中

引入后记得将ifTitleAndMenuShow 传给两个子组件，不然会报错

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
