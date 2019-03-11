<template>
  <div>
    <ul>
      <!-- item和index不能写反。第一个是内容，第二个是索引。写反了会将lists的内容作为索引 -->
      <li v-for="(item, index) in pagelists" :key="index">
        {{ item.title }}-{{ item.content }}
      </li>
    </ul>
  </div>
</template>
<script>
import store from '@/store'
export default {
  name: 'List',
  store,
  computed: {
    pagelists () {
      // 数据有取过来。只是展示的问题了
      console.log(store.state.lists)
      return store.state.lists
    }
  }
}
</script>
<style scoped>
</style>
