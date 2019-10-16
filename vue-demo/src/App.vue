<template>
  <div>
    <div class="menu">
      <ul>
        <li>
          <!--<a href="">首页</a>-->
          <router-link to="/index">首页</router-link>
        </li>
        <li>
          <!--<a href="">菜单一</a>-->
          <router-link to="/menu1">菜单一</router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'App',

  }
</script>

<style scoped>
  ul li {
    float: left;
    padding-left: 20px;
    list-style-type: none;
  }

  ul li a {
    text-decoration: none
  }

  .content {
    clear: both;
    padding-left: 60px;
    padding-top: 30px;
  }

</style>

