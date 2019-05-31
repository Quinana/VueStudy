# Vue 组件通信的多种方式

- [Vue 组件通信的多种方式](#vue-%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1%E7%9A%84%E5%A4%9A%E7%A7%8D%E6%96%B9%E5%BC%8F)
  - [Props/$emit(父子组件)](#propsemit%E7%88%B6%E5%AD%90%E7%BB%84%E4%BB%B6)
  - [bus(总线传递)](#bus%E6%80%BB%E7%BA%BF%E4%BC%A0%E9%80%92)
  - [$attrs　/ $listeners（跨级组件）](#attrs--listeners%E8%B7%A8%E7%BA%A7%E7%BB%84%E4%BB%B6)
  - [provide/inject（跨级通信）](#provideinject%E8%B7%A8%E7%BA%A7%E9%80%9A%E4%BF%A1)
  - [$parent / $children与 ref](#parent--children%E4%B8%8E-ref)
  - [Vuex](#vuex)
    - [Vuex与localStorage](#vuex%E4%B8%8Elocalstorage)

组件是 vue.js最强大的功能之一，而组件实例的作用域是相互独立的，这就意味着不同组件之间的数据无法相互引用。

而Vue本身也提供了许多不同的用于组件之间通信的功能。

前四种的代码在：https://github.com/LinStan/VueStudy/tree/master/component_communication

## Props/$emit(父子组件)

父组件A通过props的方式向子组件B传递，子组件向父组件传值则通过 B 组件中 $emit, A 组件中 v-on 的方式实现。


```
<!--HelloWorld.vue-->
<template>
  <div>
    <h1>{{ msg }}</h1>
    <!-- 子组件通过事件给父组件传值 -->
    <c1 @cEvent="pMethod"></c1>
    <c2 :cmsg="fmsg2"></c2>
  </div>
</template>

<script>
import child1 from './Child1'
import child2 from './Child2'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '父组件',
      fmsg2: '父组件通过prop传给子组件2的值'
    }
  },

  components: {
    'c1': child1,
    'c2': child2
  },
  methods: {
    // 接受子组件的值
    pMethod (e) {
      this.msg = e
    }
  }
}
</script>
```

```
<!--Child1.vue-->
<template>
  <div>
    <h2>{{ msg }}</h2>
    <!-- 绑定点击事件 点击传值 -->
    <span @click="cEvent()">{{ cmsg }}</span>
  </div>
</template>

<script>
export default {
  name: 'Child1',
  data () {
    return {
      msg: '子组件1($on)',
      cmsg: '点击给父组件传值'
    }
  },
  methods: {
    cEvent () {
      this.$emit('cEvent', '子组件1通过事件给父组件传值')
    }
  }
}
</script>
```

```
<!--Child2.vue-->
<template>
  <div>
    <h2>{{ msg1 }}</h2>
    <span>{{ cmsg }}</span>
  </div>
</template>

<script>
export default {
  name: 'Child1',
  data () {
    return {
      msg1: '子组件2(props)'
    }
  },
  props: [
    'cmsg'
  ]
}
</script>

```


## bus(总线传递)

bus是一种集中式的事件中间件，可以用于非父子组件通信。主要思想是通过新建一个空的Vue实例作为总线，然后所有实例的通信都通过这个空的Vue实例来实现

下面是一个小demo

```
<!--commonvue.js.js-->
import Vue from 'vue'
<!--直接写成js有个好处，在其他组件引用的时候不需要额外注册bus-->
<!--也可以用vue的写法-->
export default new Vue()

/**
 * 相当于下面这样写
 *
 * const bus = new Vue()
 * module.exports = bus
 */
```


```
<!--Father.vue-->
<template>
  <div>
    <!-- 需要初始化改组件才能开始传值 -->
    <child3></child3>
    <child4></child4>
  </div>
</template>

<script>
// 通过创建一个空的bus组件用于中转
import child3 from './Child3'
import child4 from './Child4'
export default {
  data () {
    return {
      msg: ''
    }
  },
  components: {
    child3,
    child4
  }
}
</script>
```

```
<template>
  <div>
    <h2>bus传值的组件</h2>
    <button @click="sendMsg">点击传值</button>
  </div>
</template>

<script>
<!--bus传值和接受值的组件需要引用bus-->
import bus from './commonvue.js'
export default {
  name: 'Child3',
  data () {
    return {
      str: 'child3'
    }
  },
  methods: {
  <!--通过bus传出值-->
    sendMsg () {
      bus.$emit('busVal', this.str)
    }
  }
}
</script>
```

```
<template>
  <div>
    <h2>我是通过bus事件传递过来的值为：{{ msg }}</h2>
  </div>
</template>
<script>
import bus from './commonvue.js'
// import child3 from './Child3'
export default {
  name: 'Child4',
  data () {
    return {
      str: 'child4',
      msg: ''
    }
  },
  <!--创建该组件的时候就挂载bus的接受方法，也可写到methods内-->
  created () {
    bus.$on('busVal', (data) => {
      this.msg = data
    })
  }
}
</script>
```

## $attrs　/ $listeners（跨级组件）
多级组件嵌套需要传递数据时，通常使用的方法是通过vuex。但如果仅仅是传递数据，而不做中间处理，使用 vuex 处理，未免有点大材小用。为此Vue2.4 版本提供了另一种方法----$attrs/$listeners

* $attrs：包含了父作用域中不被 prop 所识别 (且获取) 的特性绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件。通常配合 inheritAttrs 选项一起使用。

* $listeners：包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件

```
<template>
<!--Father_a.vue-->
  <div class="">
    <h3>这里是父组件 利用$attrs $listeners实现跨组件传递</h3>
    <h3>孙子组件传来的值:{{ remsg }}</h3>
    <child5 :fmsg="msg" :ffmsg="msg1"
        v-on:sendMsg="reciveMsg"></child5>
  </div>
</template>

<script>
import child5 from './Child5'
export default {
  name: 'Father_a',
  data () {
    return {
      msg: '传给子组件的值',
      msg1: '传给孙子组件的值',
      remsg: ''
    }
  },
  components: {child5},
  methods: {
    reciveMsg (e) {
      this.remsg = e
      console.log('revice success')
    }
  }
}
</script>
```

```
<!--Child5.vue-->
<template>
  <div>
    <h2>fmsg:{{ fmsg }}</h2>
    <child6 v-bind="$attrs" v-on="$listeners"></child6>
  </div>
</template>

<script>
import child6 from './Child6'
export default {
  name: 'Child5',
  props: ['fmsg'],
  inheritAttrs: false,
  components: { child6 }
}
</script>
```

```
<template>
  <div>
    <h2>ffmsg:{{ ffmsg }}</h2>
    <button @click="sendMsg">点击给祖父组件传值</button>
  </div>
</template>

<script>
export default {
  name: 'Child6',
  props: ['ffmsg'],
  inheritAttrs: false,
  methods: {
    sendMsg () {
      // 第一个参数是传递过去的方法名，后续是参数
      this.$emit('sendMsg', '传给祖父组件的值')
      console.log('send success')
    }
  }
}
</script>
```

## provide/inject（跨级通信）

Vue2.2.0新增API，在父组件通过provide提供变量，子孙组件通过inject注入变量。

可以在所有子孙组件使用，无视深度。

使用场景，主要是子组件获取上级组件的状态，跨级组件间建立了一种主动提供与依赖注入的关系。

```
<!--Provide.vue-->
<template>
    <inject1></inject1>
</template>
<script>
import inject1 from './inject1'
export default {
  provide: { msg: 'Provide传出的值'},
  components: {'inject1': inject1}
}
```
```
<!--inject1.vue-->
<template>
  <div><p>{{ msg }}</p>
    <inject2></inject2></div>
</template>
<script>
import inject2 from './inject2'
export default {
  inject: ['msg'],
  components: {'inject2': inject2}
}
</script>
```
```
<!--inject2.vue-->
<template>
  <div><p>{{ msg }}</p>
</template>
<script>
export default {
  inject: ['msg'],
}
</script>
```

## $parent / $children与 ref

* ref：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例
* $parent / $children：访问父 / 子实例

需要注意的是：这两种都是直接得到组件实例，使用后可以直接调用组件的方法或访问数据。

## Vuex

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。
vuex最大的作用就是把部分父子组件之间频繁的通信过程简单化，所以，对于一些父子组件通信并不频繁的情况来说，并不应该使用vuex，当然这也意味着，如果你对父子组件之间的通信还不是很明确的话，可以先学习一下这一块的知识。

Vuex实现了一个单向数据流，在全局拥有一个State存放数据，当组件要更改State中的数据时，必须通过Mutation进行，Mutation同时提供了订阅者模式供外部插件调用获取State数据的更新。

而当所有异步操作(常见于调用后端接口异步获取更新数据)或批量的同步操作需要走Action，但Action也是无法直接修改State的，还是需要通过Mutation来修改State的数据。最后，根据State的变化，渲染到视图上。

图解：

![vuex图解](https://github.com/LinStan/VueStudy/blob/master/%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0/img/vuex.png?raw=true)

* 对图中的各模块在流程中的功能
  * Vue Components：Vue组件。负责接收用户操作等交互行为，执行dispatch方法触发对应action进行回应。
  * dispatch：操作行为触发方法，是唯一能执行action的方法。
  * actions：操作行为处理模块,由组件中的$store.dispatch(‘action 名称‘, data1)来触发。然后由commit()来触发mutation的调用 , 间接更新 state。负责处理Vue Components接收到的所有交互行为。包含同步/异步操作，支持多个同名方法，按照注册的顺序依次触发。向后台API请求的操作就在这个模块中进行，包括触发其他action以及提交mutation的操作。该模块提供了Promise的封装，以支持action的链式触发。
  * commit：状态改变提交操作方法。对mutation进行提交，是唯一能执行mutation的方法。
  * mutations：状态改变操作方法，由actions中的commit(‘mutation 名称‘)来触发。是Vuex修改state的唯一推荐方法。该方法只能进行同步操作，且方法名只能全局唯一。操作之中会有一些hook暴露出来，以进行state的监控等。
  * state：页面状态管理容器对象。集中存储Vue components中data对象的零散数据，全局唯一，以进行统一的状态管理。页面显示所需的数据从该对象中进行读取。
  * getters：state对象读取方法。图中没有单独列出该模块，应该被包含在了render中，Vue Components通过该方法读取全局state对象。

```
<div id="app">
  <p>{{ count }}</p>
  <p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </p>
</div>
```
```
// make sure to call Vue.use(Vuex) if using a module system

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
  	increment: state => state.count++,
    decrement: state => state.count--
  }
})

new Vue({
  el: '#app',
  computed: {
    count () {
	    return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
    	store.commit('decrement')
    }
  }
})
```

### Vuex与localStorage

Vuex虽然是状态管理器，存储的数据是响应式的，但是并不会自动保存，因此需要自行对其做一个保存操作。

可以利用localStorage，每当vuex发生变化，将其保存到localStorage中，并在每次刷新后，若localStorage存有数据，直接取出替换state

需要注意一下：vuex里保存的状态，都是数组，而localStorage只支持字符串，所以需要用JSON转换：

```
let defaultCity = "上海"
try {   // 用户关闭了本地存储功能，此时在外层加个try...catch
  if (!defaultCity){
    defaultCity = JSON.parse(
    window.localStorage.getItem(‘defaultCity‘))
  }
}catch(e){}
export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  mutations: {
    changeCity(state, city) {
      state.city = city
      try {
      window.localStorage.setItem(‘defaultCity‘,
        JSON.stringify(state.city));
      // 数据改变的时候把数据拷贝一份保存到localStorage里面
      } catch (e) {}
    }
  }
})
```
