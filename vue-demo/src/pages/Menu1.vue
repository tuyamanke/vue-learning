<template>
  <div class="main">
    <div class="menu">
      <ul>
        <li>
          <router-link to="/menu1/submenu1">子菜单一</router-link>
        </li>
        <li>
          <router-link to="/menu1/submenu2">子菜单二</router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Menu1"
  }
</script>

<style scoped>
  .main {
    display: flex;
  }

  ul li {
    list-style-type: none;
  }

  ul li a {
    text-decoration: none
  }

  .content {
    clear: both;
    padding: 30px;
  }
</style>
