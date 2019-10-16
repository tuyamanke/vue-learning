<template>
  <div>
    <a :href="webSite.url" target="_blank" :title="webSite.title">
      <img src="../assets/logo.png" height="100" width="100"/>
    </a>
    <ul>
      <!--v-for 时最好要绑定唯一的 key 不然会有麻烦-->
      <li v-for="(menu, index) in menus" :key="index">
        <a :href="'http://localhost:8080/menu/' + menu.id">{{menu.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Menu",
    // 通过 props 声明从父组件接收的数据属性
    // 之后就可以像自己定义的一样使用了
    props: ['menus', 'webSite']
  }
</script>

<style scoped>
  ul li {
    float: left;
    padding-left: 5px;
    list-style-type: none;
  }
</style>
