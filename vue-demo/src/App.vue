<template>
  <div>
    <!--将父组件中的数据传递给子组件-->
    <Menu :menus="menus" :webSite="webSite"/>
    <Foot>
      <!--指定子组件中插槽的 name 就可以往插槽里放内容了，可以放 HTML 元素-->
      <div slot="footSlot">
        版权所有：{{copyRight}}
      </div>
    </Foot>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import Menu from './components/Menu'
  import Foot from './components/Foot'

  export default {
    name: 'App',
    components: {
      Menu,
      Foot
    },
    data() {
      return {
        copyRight: "www.tuyamanke.com",
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
      let api = 'https://api.apiopen.top/getJoke?page=1&count=2&type=video';
      this.$http.get(api).then(response => { // 请求成功时的回调
        console.log(response.body);
      }, response => {// 请求失败时的回调
        alert(`请求失败`);
      });
    }
  }
</script>

<style>

</style>

