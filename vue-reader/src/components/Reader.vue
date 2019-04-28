<template>
  <div class="reader">
    <p>
      <textarea cols="50" v-model="text"></textarea>
      <file-reader @load="text = $event"></file-reader>
    </p>
  </div>
</template>

<script>
import fileReader from './FileReader'
export default {
  name: 'Reader',
  components: { fileReader },
  data () {
    return {
      text: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
textarea {
  width: 100%;
  height: 80%;
}
p {
  height: 100%;
}
</style>
