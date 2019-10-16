<template>
    <div class="foot">
      <!--给插槽取一个唯一的 name，插槽里面可以写默认值-->
      <slot name="footSlot">插槽默认内容</slot>
    </div>
</template>

<script>
    export default {
        name: "Foot"
    }
</script>

<style scoped>
  .foot {
    padding: 20px;
  }
</style>
