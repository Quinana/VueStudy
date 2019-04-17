# Promise与异步编程

- [Promise与异步编程](#promise%E4%B8%8E%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B)
  - [异步编程的背景](#%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B%E7%9A%84%E8%83%8C%E6%99%AF)
    - [事件模型](#%E4%BA%8B%E4%BB%B6%E6%A8%A1%E5%9E%8B)
    - [回调模式](#%E5%9B%9E%E8%B0%83%E6%A8%A1%E5%BC%8F)
  - [Promise 基础](#promise-%E5%9F%BA%E7%A1%80)
    - [Promise生命周期](#promise%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)

## 异步编程的背景

JS 引擎建立在单线程事件循环的概念上。单线程（Single-threaded）意味着同一时刻只能执行一段代码.

Promise之前异步主要由事件模型和回调两种实现.

### 事件模型

对用户的操作进行响应,并添加到任务序列的末端.类似点击按钮,提交表单等等,只有当触发了这些DOM事件函数，才会执行他们。

```JavaScript
let button = document.getElementById("my-btn");
button.onclick = function (event) {
  console.log("Clicked");
};
```

### 回调模式

回调函数模式要比事件模型灵活，回调函数串联多个调用相对容易一点,但是容易陷入回调地狱.

另外注意下Node.js回调原则:错误优先.

```JavaScript
method1(function (err, result) {
  if (err) {
    throw err;
  }
  method2(function (err, result) {
    if (err) {
      throw err;
    }
    method3(function (err, result) {
      if (err) {
        throw err;
      }
        method4(result);
    });
  });
});
```

## Promise 基础

### Promise生命周期

**Promise短暂的生命周期**:

起始为挂起态(pending)也称为未决(unsettled), 然后就是已决(settled)。已决分为两种, 已完成(fulfilled)和已拒绝(rejected).

```JavaScript
```




```JavaScript
```
```JavaScript
```