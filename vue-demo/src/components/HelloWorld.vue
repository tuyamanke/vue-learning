<template>
  <div>
    <p class="info">{{info}}</p>
  </div>
</template>

<script>
  export default {
    // 组件的名称
    name: "HelloWorld",
    // 以前单个页面可以直接写变量值
    // 但现在要作为组件导出，就要写成 data 方法
    data() {
      return {
        info: 'Hello Vue!'
      }
    }
  }
</script>

<style scoped>
  .info {
    color: red;
    font-size: 30px;
  }

</style>
