<!--主要分为以下三大块-->

<!--用于写 HTML 模板 只能有一个根节点-->
<template>
  <div>
    <img src="./assets/logo.png" height="200" width="200"/>
    <!--3. 使用标签-->
    <hello-world/>
    <!--以下写法也行-->
    <!--<HelloWorld/>-->
  </div>
</template>

<!--配置一些组件对象 export default 等，写 js 代码-->
<script>
  // 1. 引入组件
  import HelloWorld from './components/HelloWorld'

  export default {
    name: 'App',
    components: {
      // 2. 映射成组件标签
      // HelloWorld: HelloWorld
      // ES6 写法，属性名和赋给属性的变量名名称一致
      HelloWorld
    }
  }
</script>

<!--写样式，加了 scoped 之后，仅对该组件有效-->
<style>

</style>

