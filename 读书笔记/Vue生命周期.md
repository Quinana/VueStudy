# Vue实例生命钩子

![image](https://vuejs.org/images/lifecycle.png)

通过下面代码可以看到各个周期的渲染

```JavaScript
<!DOCTYPE html>
<html>
<title>Vue生命周期</title>
<script src=" https://cdn.jsdelivr.net/npm/vue/dist/vue.js"> </script>

<body>
  <div id="app">{{message}}</div>
  <script>
    var vm = new Vue({
      // 如果注释掉el，进行到Created就会停止，直到调用vm.$mount(el)
      el: '#app',
      // 优先级: render>template>outerHTML
      // 使用render的话是在beforeMount和mounted之间完成渲染的替换

      // template: "<div>{{message+' template'}}</div>",
      // render: function (createElement) {
      //   return createElement('h1', 'this is render')
      // },
      data: {
        message: 'hello message'
      },
      beforeCreate: function () {
        console.log('-------beforeCreate状态-------')
        console.log('el: ' + this.$el)
        console.log('data: ' + this.$data)
      },
      created: function () {
        console.log('-------created状态 完成data渲染-------')
        console.log("%s", 'el: ' + this.$el)
        console.log('data: ' + this.$data)
        console.log(this.$data)
        console.log('message: ' + this.message)
      },
      beforeMount: function () {
        console.log('-------beforeMount状态 完成template渲染-------')
        // template的优先级高于outerHtml的优先级
        console.log('el: ' + this.$el)
        console.log(this.$el)
      },
      mounted: function () {
        console.log('-------mounted状态 完成el替代template中的el-------')
        console.log('el: ' + this.$el)
        console.log(this.$el)
      },
      beforeUpdate: function () {
        console.log('-------beforeUpdate状态 当data发生更新被调用-------')
        console.log('el: ' + this.$el)
        console.log(this.$el)
        console.log('data: ' + this.$data)
        console.log('message: ' + this.message)
      },
      updated: function () {
        console.log('-------updated状态 更新虚拟dom-------')
        console.log('el: ' + this.$el)
        console.log(this.$el)
        console.log('data: ' + this.$data)
        console.log('message: ' + this.message)
      },
      beforeDestroy: function () {
        console.log('-------beforeDestroy-------');
        console.log('el: ' + this.$el)
        console.log(this.$el)
        console.log('data: ' + this.$data)
        console.log('message: ' + this.message)
      },
      destroyed: function () {
        console.log('-------destroyed-------');
        console.log('el: ' + this.$el)
        console.log(this.$el)
        console.log('data: ' + this.$data)
        console.log('message: ' + this.message)
      }
    })
  </script>
</body>

</html>
```

### beforeCreate To created

![image](https://github.com/LinStan/VueStudy/blob/master/Gallery/beforeCreatedToMounted.png?raw=true)

**beforeCreate**状态一切都是未定义状态

**created**状态对data属性进行绑定，但是el还是未定义状态，且如果没有el，生命周期暂停。
直到调用

```
vm.$mount(el)
```

**beforeMount**之前完成了template的渲染。如果vue实例没有template会从el对应的外部HTML作为template，但是此时el的还未被创建。

另外还有一个render也可以进行template渲染，注意三者优先级：
render>template>outerHTML

**mounted**给vue实例对象添加$el成员，并且替换挂载的DOM元素。

### beforeUpdate To updated

![image](https://github.com/LinStan/VueStudy/blob/master/Gallery/beforeUpdatedToUpdated.png?raw=true)

当vue发现data中的数据发生了改变，会触发对应组件的重新渲染，先后调用beforeUpdate和updated钩子函数。

### beforeDestroy To destroyed

**beforeDestroy**在实例销毁之前调用。在这一步，实例仍然完全可用。

**destroyed**在Vue 实例销毁后调用。调用后，Vue实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。