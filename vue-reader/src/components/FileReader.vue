<template id="fileReader">
  <label class="text-reader">
    读取文件
    <input type="file" @change="loadTextFromFile" />
  </label>
</template>

<script>
export default {
  name: 'file-reader',
  // Vue.component('file-reader', {
  template: '#fileReader',
  methods: {
    loadTextFromFile: function (e) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = e => this.$emit('load', e.target.result)
      reader.readAsText(file, 'UTF-8')
    }
  }
  // })
}
</script>
<style>
.file-reader {
  position: relative;
  overflow: hidden;
  display: inline-block;
  border: 2px solid black;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
}
input {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
}
</style>
