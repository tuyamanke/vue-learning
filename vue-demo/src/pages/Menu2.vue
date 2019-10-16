<template>
  <div>
    <ul>
      <li v-for="(user, index) in userList" :key="index">
        <router-link :to="`/menu2/subMenu3/${user.id}`">{{user.userName}}</router-link>
      </li>
    </ul>
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
