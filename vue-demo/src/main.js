// 入口 js : 创建 Vue 实例

import Vue from 'vue'
import App from './App'
// router 文件夹下的 index.js 就不用写了，默认就能找到
import router from './router'


new Vue({
  el: '#app',
  components: {
    // 组件映射成标签
    App
  },
  // 通过指定 template 来渲染标签
  template: '<App/>',
  // 配置路由
  // router: router
  // ES6 的写法
  router
});
