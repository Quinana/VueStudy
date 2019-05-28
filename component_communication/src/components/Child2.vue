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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
