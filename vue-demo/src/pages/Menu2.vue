<template>
  <div>
    <ul>
      <li v-for="(user, index) in userList" :key="index">
        <router-link :to="`/menu2/subMenu3?userId=${user.id}`">{{user.userName}}</router-link>
        <br>
        <button @click="pushShow(user.id)">push显示方式</button>
        <button @click="replaceShow(user.id)">replace显示方式</button>
      </li>
    </ul>
    <button @click="$router.back()">后退</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  import Axios from 'axios'

  export default {
    name: "Menu2",
    data() {
      return {
        userList: []
      };
    },
    methods: {
      pushShow(id) {
        this.$router.push(`/menu2/subMenu3?userId=${id}`);
      },
      replaceShow(id) {
        this.$router.replace(`/menu2/subMenu3?userId=${id}`);
      }
    },
    mounted() {
      let api = 'http://localhost:3000/users';
      Axios.get(api).then(response => {
        if (response.data.code === 0) {
          this.userList = response.data.data;
        } else {
          console.log(`code: ${response.code}, message: ${response.code}`);
        }
      }).catch(error => {
        alert("请求失败");
      });
    }
  }
</script>

<style scoped>
  ul li a {
    text-decoration: none
  }
</style>
