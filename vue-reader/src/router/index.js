import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Reader from '@/components/Reader'
import Ebook from '@/Ebook'

Vue.use(Router)

export default new Router({
  // 可以去除vue自带的#，防止epub文件无法下载
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/',
    //   name: 'Reader',
    //   component: Reader
    // },
    {
      path: '/',
      // 根目录重定向到ebook下
      redirect: '/ebook'
    },
    {
      path: '/ebook',
      name: 'Ebook',
      component: Ebook
    }
  ]
})
