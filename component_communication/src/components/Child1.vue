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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
