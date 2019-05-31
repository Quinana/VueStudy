<template>
  <div id="app">
    <!-- <h1>这里是父组件</h1> -->
    <router-link to="/">prop/$on</router-link> |

    <router-link to="/father">bus</router-link> |
    <router-link to="/fathera">$attrs and $listeners</router-link> |
    <router-link to="/provide">provide/inject</router-link>
    <router-view />
  </div>
</template>

<script>
// import child1 from './components/Child1'
export default {
  name: 'App',
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
