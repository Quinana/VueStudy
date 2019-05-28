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
  created () {
    bus.$on('busVal', (data) => {
      this.msg = data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
