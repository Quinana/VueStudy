<template>
  <div class="">
    <h1>主页</h1>
    <!-- 需要初始化改组件才能开始传值 -->
    <child3></child3>
    <child4></child4>
    <!-- <h1>我是通过bus事件传递过来的值为：{{ msg }}</h1> -->
  </div>
</template>

<script>
// 通过创建一个空的bus组件用于中转
import bus from './commonvue.js'
import child3 from './Child3'
import child4 from './Child4'
export default {
  name: 'Father',
  data () {
    return {
      msg: ''
    }
  },
  components: {
    bus: bus,
    child3,
    child4
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
