<template>
  <div>
    <p>用户ID: {{$route.query.userId}}</p>
    <p>用户名：{{userInfo.userName}}</p>
    <p>电话：{{userInfo.phoneNumber}}</p>
    <p>邮箱：{{userInfo.email}}</p>
    <p>昵称：{{userInfo.personalName}}</p>
    <p>公司：{{userInfo.companyName}}</p>
    <p>公司地址：{{userInfo.companyAddress}}</p>
    <p>注册IP：{{userInfo.registerIp}}</p>
    <p>注册时间：{{userInfo.createTime}}</p>
  </div>
</template>

<script>
  import Axios from 'axios'

  export default {
    name: "SubMenu3",
    data() {
      return {
        userInfo: ''
      }
    },
    mounted() {
      let userId = this.$route.query.userId;
      let userDetailApi = `http://localhost:3000/users/detail/${userId}`;
      Axios.get(userDetailApi).then(response => {
        if (response.data.code === 0) {
          this.userInfo = response.data.data;
        } else {
          console.log(`code: ${response.code}, message: ${response.code}`);
        }
      }).catch(error => {
        alert(`请求失败。`);
      });
    },
    watch: {
      // 监控 $route 的变化，newValue 就是变化后的 $route 的值
      $route(newValue) {
        let userId = this.$route.query.userId;
        let userDetailApi = `http://localhost:3000/users/detail/${userId}`;
        Axios.get(userDetailApi).then(response => {
          if (response.data.code === 0) {
            this.userInfo = response.data.data;
          } else {
            console.log(`code: ${response.code}, message: ${response.code}`);
          }
        }).catch(error => {
          alert(`请求失败。`);
        });
      }
    }
  }
</script>

<style scoped>

</style>
