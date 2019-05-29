import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Father from '@/components/Father'
import Fathera from '@/components/Father_a'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/father',
    name: 'Father',
    component: Father
  }, {
    path: '/fathera',
    name: 'Fathera',
    component: Fathera
  }]
})
