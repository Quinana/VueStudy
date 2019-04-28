<template>
  <div id="app">
    <!-- <span class="icon-back"></span> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
// 设置dom树下html元素中默认的fontsize大小
// 当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发
document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')
  // 限定字体大小上限
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = fontSize + 'px'
})
</script>

<style>
</style>
