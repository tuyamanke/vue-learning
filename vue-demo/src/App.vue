<template>
  <div>
    <p>Current Number {{number}} is {{evenOrOdd}} </p>
    <button @click="increment">+</button>
    <button @click="decrement()">-</button>
  </div>
</template>

<script>

  import {mapActions, mapGetters, mapState} from 'vuex'

  export default {
    name: 'App',
    methods: {
      // 映射 actions 时，要求事件触发的方法名和该方法调用的 store.js 中的 actions 中的方法名一致
      // 如此处就都是 increment
      ...mapActions(['increment']),
      // increment() {
      //   // 调用 store.js 里 actions 中的 increment 方法
      //   this.$store.dispatch('increment');
      // },
      decrement() {
        // 调用 store.js 里 actions 中的 decrement 方法
        this.$store.dispatch('decrement');
      }
    },
    computed: {
      // 进行 state 映射，插值时，{{$store.state.number}} 就可以简写成 {{number}}
      ...mapState(['number']),
      ...mapGetters(['evenOrOdd']),
      // 如果调用的计算属性方法名和 store.js 里的 getters 中的 方法名不一致据不能用数组了，要用对象
      // ...mapGetters({evenOrOdd: 'evenOrOdd222'})
    }
  }
</script>

<style scoped>

</style>

