<template>
  <div class="">
    <h3>这里是父组件 利用$attrs $listeners实现跨组件传递</h3>
    <h3>孙子组件传来的值:{{ remsg }}</h3>
    <child5 :fmsg="msg" :ffmsg="msg1" v-on:sendMsg="reciveMsg"></child5>
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
  components: {
    child5
  },
  methods: {
    reciveMsg (e) {
      this.remsg = e
      console.log('revice success')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  border: 1px solid red;
}
</style>
