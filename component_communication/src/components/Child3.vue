<template>
  <div>
    <h2>这里是bus的第一个组件</h2>
    <button @click="sendMsg">点击传值</button>
  </div>
</template>

<script>
import bus from './commonvue.js'
export default {
  name: 'Child3',
  data () {
    return {
      str: 'child3'
    }
  },
  methods: {
    sendMsg () {
      bus.$emit('busVal', this.str)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
