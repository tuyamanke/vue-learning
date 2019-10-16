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
    <br>
    <br>
    <input type="text" v-model="content">
    <button @click="add">添加菜单</button>
  </div>
</template>

<script>
  export default {
    name: "Menu",
    // 通过 props 声明从父组件接收的数据属性
    // 通过 props 声明从父组件接收的方法属性 addMenu
    // 之后就可以像自己定义的一样使用了
    props: ['menus', 'webSite', 'addMenu'],
    data() {
      return {
        content: ''
      }
    },
    methods: {
      add() {
        const content = this.content.trim();
        if (!content) {
          alert(`菜单名称不能为空。`);
          return;
        }
        let menu = {id: 5, name: content};
        this.addMenu(menu);
        this.content = '';
      }
    }
  }
</script>

<style scoped>
  ul li {
    float: left;
    padding-left: 5px;
    list-style-type: none;
  }
</style>
