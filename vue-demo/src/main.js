// 入口 js : 创建 Vue 实例

import Vue from 'vue'
import App from './App'

new Vue({
  el: '#app',
  components: {
    // 组件映射成标签
    App
  },
  // 通过指定 template 来渲染标签
  template: '<App/>'
});
