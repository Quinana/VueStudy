<template>
  <div>
    <h2>provide/inject</h2>
    <inject1></inject1>
  </div>
</template>

<script>
import inject1 from './inject1'
// import inject2 from './inject2'
export default {
  provide: {
    msg: 'Provide传出的值'
  },

  components: {
    'inject1': inject1
    // 'inject2': inject2
  }
}
</script>
