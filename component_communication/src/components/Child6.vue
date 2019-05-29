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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
