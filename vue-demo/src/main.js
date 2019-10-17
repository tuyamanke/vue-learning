// 入口 js : 创建 Vue 实例

import Vue from 'vue'
import App from './App'
// 引入 store.js
import store from './store'


new Vue({
  el: '#app',
  components: {
    // 组件映射成标签
    App
  },
  // 通过指定 template 来渲染标签
  template: '<App/>',
  // 这样所有的 Vue 实例都有了一个 $store 对象
  store
});
