// 入口 js : 创建 Vue 实例

import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'

// 在 main.js 中进行全局引入
// 声明使用插件，底层会给 Vue 实例对象添加一个属性 $http
// 但 Axios 不可以这样全局引入
Vue.use(VueResource);

new Vue({
  el: '#app',
  components: {
    // 组件映射成标签
    App
  },
  // 通过指定 template 来渲染标签
  template: '<App/>'
});
