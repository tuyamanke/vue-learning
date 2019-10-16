<template>
  <div>
    <!--将父组件中的数据传递给子组件-->
    <Menu :menus="menus" :webSite="webSite"/>
  </div>
</template>

<script>
  import Menu from './components/Menu'

  export default {
    name: 'App',
    components: {
      Menu
    },
    data() {
      return {
        menus: [{
          id: 1,
          name: '科技'
        }, {
          id: 2,
          name: '教育'
        }, {
          id: 3,
          name: '文学'
        }, {
          id: 4,
          name: '艺术'
        }],
        webSite: {
          url: 'https://cn.vuejs.org',
          title: 'Vue 官网:)'
        }
      }
    }
  }
</script>

<style>

</style>

