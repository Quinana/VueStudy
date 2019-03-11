<template>
  <div>
    <router-view />
    <ul>
      <!-- name是route中的children里的name -->
      <li><router-link to="/home/list">新闻列表</router-link></li>
      <!-- 有点问题，无法通过name调用 -->
      <!-- <li><router-link to="{name:'User'}">个人中心</router-link></li> -->
      <li><router-link to="/home/user">个人中心</router-link></li>
      <li><router-link to="/add">添加</router-link></li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>
