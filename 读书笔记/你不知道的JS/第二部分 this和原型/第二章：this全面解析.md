this的指向是在被调用的时候绑定的，其具体指向取决于函数的调用位置

### 调用位置

调用位置指的是函数在代码中被调用的位置，可以通过分析调用栈来找到调用位置。

调用栈类似一个函数调用链，可以直接通过ide(vscode)自带的调试工具方便的看到。  

### 绑定规则

绑定规则优先级：new>显式绑定>隐式绑定>默认绑定

* 默认绑定
    * 默认绑定指的是独立的函数调用，此时this指向全局对象或undefined取决于函数是否在严格模式下
* 隐式绑定
    * 当函数引用有上下文对象时，绑定到上下文对象。
    * 对象属性引用链的最后一层会影响调用位置
    * 隐式绑定有隐式丢失的问题，会丢失this绑定，从而使得this指向全局对象
* 显式绑定
    * 通过call apply显式将this绑定到某个对象上，但是该方式无法解决绑定丢失问题
    * 通过bind的硬绑定可以解决绑定丢失问题
* new绑定
    * new调用函数的过程:
        * 创建一个新的空对象
        * 将新对象的原型连接到构造函数的原型上
        * 新对象绑定到函数调用的this
        * 如果没有返回其他对象，new表达式中的函数调用自动返回这个新对象
    * 因此new会将this绑定到new出来的实例上
* 箭头函数
    * 根据最近的外层函数this来决定自己的this指向

代码实例：

```
//默认绑定
function foo()
{
    console.log(this.a)
}
var a = 2;
foo()// 2 or undefined
//隐式绑定
let obj2 = {
    a:42,foo:foo
}
let obj1={
    a:1,obj2:obj2
}
obj1.obj2.foo()// 42
//隐式绑定丢失
let obj = {
  a: 0, foo: foo
}
let bar = obj.foo
bar() // 2 or undefined
//显式绑定
obj={
    a:2
}
foo.call(obj) // 2
//new
function foo1 (a) {
  this.a = a
}
bar = new foo1(2)
console.log(bar.a) // 2
```

### 绑定例外

* 被忽略的this
    * 当null或undefined传入call apply bind 会导致调用被忽略，使用默认绑定规则
    * 可以通过创建DMZ 空的非委托对象，使得this绑定到该对象不会对全局对象造成影响。
* 间接引用
* 软绑定
    * 通过给默认绑定指定一个值，实现和硬绑定相同的效果，且后期可以继续修改this   

```
//创建DMZ 空的非委托对象
function foo(a,b){
            console.log(a,b)
        }
        var kobj = Object.create(null)
        foo.apply(kobj,[2,3])//2,3
```

### this绑定对象寻找规则
1. 由 new 调用?  绑定到新创建的对象。
2. 由 call 或者 apply (或者 bind )调用?  绑定到指定的对象。
3. 由上下文对象调用?  绑定到那个上下文对象。
4. 默认:在严格模式下绑定到 undefined ,否则绑定到全局对象。