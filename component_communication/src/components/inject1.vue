<template>
  <div>
    <p>{{ msg }}</p>
    <inject2></inject2>
  </div>
</template>

<script>
import inject2 from './inject2'
export default {
  inject: ['msg'],
  components: {
    'inject2': inject2
  }
}
</script>
