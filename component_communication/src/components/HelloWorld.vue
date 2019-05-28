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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
