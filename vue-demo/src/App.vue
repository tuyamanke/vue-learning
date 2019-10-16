<template>
  <div>
    <!--将父组件中的数据传递给子组件-->
    <Menu :menus="menus" :webSite="webSite"/>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
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
    },
    methods: {
      addMenu(menu) {
        // 向 menus 数组尾部添加新的菜单
        this.menus.push(menu);
      }
    },
    mounted() {
      // 这里用箭头函数，this 正好获取到当前的 Vue 实例对象
      PubSub.subscribe('addMenuMessageId', (message, data) => {
        // 这个 message 参数就是 发布订阅 消息唯一标识 此处就是 addMenuMessageId
        console.log(message);
        this.addMenu(data);
      });
    }
  }
</script>

<style>

</style>

