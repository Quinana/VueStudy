该项目主要用于记录Vue的学习进程
============================

按时间线记录了一下自己学习JS的路线和进度条。每个打勾的都是已完成的小目标
------------------------------------------------------------------

最近更新：2021.09.28
-------------------

目前完成进度
-------------------

* **你不知道的JS上卷 ✔2019.9.5**
  * [初略笔记](https://github.com/LinStan/VueStudy/tree/master/读书笔记/你不知道的JS)
  * 上卷其实主要讲了JS中this的绑定
  * 原型是什么
  * js中类的概念和其他语言类的概念的不同之处

* **基于Vue仿制去哪儿网的几个核心页面 ✔2019.7.18**
  * [代码](https://github.com/LinStan/qunaer)
  * 使用了Vue全家桶  算是熟悉了一下基本的应用

* 推荐一个网站，用于正则表达式的可视化，对于理解正则的保留符挺有用的
  * [https://regexper.com/#%5Cb](https://regexper.com/#%5Cb)

* [Vue组件传值](https://github.com/LinStan/VueStudy/tree/master/component_communication)
  * 整理了一下传统的传值方式
  * props父子传值
  * $on $emit父子传值
  * bus 非父子通用传值(声明一个全局Vue实例变量 EventBus , 把所有的通信数据，事件监听都存储到这个变量上。类简易版vuex)
  * $attrs & $listeners (组件封装用的较多) 该接口是vue2.4新增的，主要用处是跨级传递，可以更简便的完成多层的父子传递数据，简化props和emit的书写

* [JavaScript高级程序设计（红皮书）](https://book.douban.com/subject/10546125/)
  * 进度  第六章 发现这本书有些东西讲的太细了 很多方法应该只需要看过一遍就行了，后期实际使用到再详细了解
  * 发现百度脑图可以将思维导图转为md格式，推荐
  * 这本感觉不是特别适合入门，需要配合其他的博客之类的进行学习。
  * [思维导图](https://github.com/LinStan/VueStudy/tree/master/读书笔记/JavaScript高级程序设计)

* **简单的rtmp直播流播放器 ✔2019.5.9**
  * 基于vue-video-player接受rtmp流信号并进行播放。
  * 双排布局。封面文件未放置
  * 暂不支持hls，不清楚为什么，有了解的请解惑

* **基于Vue的仿微信语音输入输出 ✔2019.5.5**
  * 基于ydui 的ui界面
  * 基于AudioContext实现基本的语音输入保存和语音播放以及下载
  * [代码](https://github.com/LinStan/VueStudy/tree/master/WeChat-voice-input)
  * 这个小demo是用于整合到小导师的一个小项目，整合进去后用cordova编译成app发现无法成功播放录音，后来查了下好像是audio不适用于移动端，所以换用了cordova的Media插件API，以及File和File-Transfer。实现移动端的录音并上传到服务端，以及接受服务端的返回字段进行录音展示。服务器端使用百度语音API

* **基于Vue的Epub小说阅读器 ✔2019.4.29**
  * 基于epubjs的内置方法实现翻页，目录加载等功能
  * 暂时只能阅读指定的小说内容，可以自行更换小说资源
  * 启动参照子文件夹内的readme
  * 实现全文搜索功能
  * [代码](https://github.com/LinStan/VueStudy/tree/master/vue-reader)

* [深入理解ES6 读书笔记](https://book.douban.com/subject/27072230/) **✔2019.4.23**
  * 私人向，只记了一下自己觉得重要的东西，知识点可能不是特别完整
  * [第一章：块级作用域绑定](https://github.com/LinStan/VueStudy/tree/master/读书笔记/深入理解ES6/第一章：块级作用域绑定.md)
  * [第二章：字符串和正则表达式](https://github.com/LinStan/VueStudy/tree/master/读书笔记/深入理解ES6/第二章：字符串和正则表达式.md)
  * [第三章：函数](https://github.com/LinStan/VueStudy/tree/master/读书笔记/深入理解ES6/第三章：函数.md)
  * [第四章：扩展的对象功能](https://github.com/LinStan/VueStudy/tree/master/读书笔记/深入理解ES6/第四章：扩展的对象功能.md)
  * [第五章：解构：更方便的数据访问](https://github.com/LinStan/VueStudy/tree/master/读书笔记/深入理解ES6/第五章：解构：更方便的数据访问.md)
  * [第六章：符号与符号属性](https://github.com/LinStan/VueStudy/tree/master/读书笔记/深入理解ES6/第六章：符号与符号属性.md)
  * [第七章：Set与Map](https://github.com/LinStan/VueStudy/tree/master/读书笔记/深入理解ES6/第七章：Set与Map.md)
  * [第八章：迭代器与生成器](https://github.com/LinStan/VueStudy/tree/master/读书笔记/深入理解ES6/第八章：迭代器与生成器.md)
  * [第九章：JS的类](https://github.com/LinStan/VueStudy/tree/master/读书笔记/深入理解ES6/第九章：JS的类.md)
  * [第十章：增强的数组功能](https://github.com/LinStan/VueStudy/tree/master/读书笔记/深入理解ES6/第十章：增强的数组功能.md)
  * [第十一章：Promise与异步编程](https://github.com/LinStan/VueStudy/tree/master/读书笔记/深入理解ES6/第十一章：Promise与异步编程.md)
  * [第十三章：用模块封装代码](https://github.com/LinStan/VueStudy/tree/master/读书笔记/深入理解ES6/第十三章：用模块封装代码.md)
  
* [JavaScript进阶篇](https://www.imooc.com/learn/10) <b>✔2019.3.21</b>
  * 学习JS基础语法、语法、函数、方法等
  * 掌握JS编程思路、知识的使用等，实现运用JS语言为网页增加动态效果，达到与用户交互的目的。
  * [代码](https://github.com/LinStan/VueStudy/tree/master/JS进阶篇)

* [JavaScript入门篇](https://www.imooc.com/learn/36)   <b>✔2019.3.20</b>
  * 熟悉JavaScript基本语法、窗口交互方法和通过DOM进行网页元素的操作
  * 学会如何编写JS代码，如何运用JavaScript去操作HTML元素和CSS样式
  * [代码](https://github.com/LinStan/VueStudy/tree/master/JS入门篇)

* [Promise入门课程](https://www.imooc.com/learn/949) <b>✔2019.3.19</b>
  * 简介：为解决异步函数的回调陷阱，开发社区不断摸索，终于折腾出 Promise/A+。它的优势非常显著：
    1. 不增加新的语法，可以立刻适配几乎所有浏览器 
    2. 以队列的形式组织代码，易读好改 
    3. 捕获异常方案也基本可用
  * [课程笔记](https://github.com/LinStan/VueStudy/blob/master/读书笔记/Promise入门课程笔记.md)

* 知乎日报PC端[基于《Vue.js实战》纸质书第13章实现——书本源码](https://github.com/icarusion/vue-book/tree/master/daily) <b>✔2019.3.13</b>
  * 运行指南看zhihudaily下的readme.md
  * 和作者提供的源码有些许不同，我是vue-cli初始化的应用。
  * 书中所用的api已经失效，更换了正确的api。
  * 由于知乎日报不提供专题浏览。删除了推荐主题模块
  * 添加了日历控件，方便查看特定日期的日报
  * 了解利用nodejs的request库实现跨域数据获取，整理，可视化
  * prop，事件，子组件索引
  
* 基于Vue的留言板demo **✔2019.3.12**
  * 知识点
    * Vuex
    * vue-router
    * localStorage
    * css样式
  * 实现了登陆注册,发布留言功能
  * 了解了vue-router的使用以及嵌套使用
  * 大概了解了一下vue-ui的可视化界面
  * 初步使用了LocalStorage 
  * 美化了一下css 审美苦手。放弃
  
* TodoList小项目 [慕课网Vue2.5入门课程实践](https://www.imooc.com/learn/980) **✔2019.2.21**
  * 一个基本的todolist 熟悉了一下vue的几个指令
  
* vue2.0实现一个基本的购物车功能 [使用vue2.0实现购物车和地址选配功能](https://www.imooc.com/learn/796) **✔2019.2.26**
  * vue2.0-shoppingCart是完成后的项目文件
  * 购物车课程demo 是课程源码
  * 完成商品数量增减
  * 完成商品删除
  * 点击more实现展开折叠
  * 完成地址删除等
  * 地址添加,编辑(待完成)
  
* [初识HTML+CSS](https://www.imooc.com/learn/9)**✔2019.2.28**
  * 花了一天时间过了一下慕课上的这个课程，对一些最基本的css和html语法有了一个了解。由于课程本身就是提交代码形式的，因此没有将代码搬运到这里
  
* [一个基本的手势识别demo]  **✔2019.3.29**
  * 基于hammer.js一个JS的手势识别的库
  * 算是简单地引入到vue中写了一个很小地功能demo
  * 两种实现，一个是直接在单个html中使用
  * 一个是在vue-cli初始化的项目中实现 了解了一下外部导入js的实现
  * [代码](https://github.com/LinStan/VueStudy/blob/master/gesture_touch)

* 计算器<br> 
  * 实现加法操作<br>
* 扇形图demo<br>
  * 手动输入三种颜色比例，显示对应扇形图<br>
* 备忘录demo<br>
  * 输入待办事项，回车添加到下方，点击删除按钮添加到回收站，点击已完成添加到已完成项目列表<br>
* [官网教程](https://cn.vuejs.org/v2/guide/)
  * 介绍
    * 声明式渲染 ✔
    * 条件和循环 ✔
    * 处理用户输入 ✔
    * 组件化应用构建 ✔
  * Vue 实例 (无代码)
    * 创建一个 Vue 实例 ✔
    * 数据与方法 ✔
    * 实例生命周期钩子 ✔
    * 生命周期图示 ✔
  * 模板语法
    * 插值
      * 文本
      * 原始 HTML
      * 特性
      * 使用 JavaScript 表达式
    * 指令
      * 参数
      * 修饰符
    * 缩写
      * v-bind 缩写
      * v-on 缩写
