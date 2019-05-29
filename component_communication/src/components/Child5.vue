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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
