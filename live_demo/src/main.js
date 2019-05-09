import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import VideoPlayer from 'vue-video-player'

Vue.config.productionTip = false
// VideoPlayer.config({
//   youtube: true,
//   switcher: true,
//   hls: true
// })
// Vue.use(VideoPlayer)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
