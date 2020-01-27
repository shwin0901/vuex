<template>
  <div class="home">
    <div class="title">
        Muke
        <span>
            Wang
        </span>
    </div>
    <form action="">
        <input type="text" placeholder='请输入您的账号' v-model="user">
        <input type="password" name="" id="" placeholder='请输入您的密码' v-model="password">
    </form>
    <button class="btn" @click="int()">
        登录
    </button>
    <small class="">
        版权归属@zxg所有
    </small>
  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'Home',
  data () {
    return {
      user: '',
      password: ''
    }
  },
  methods: {
    int () {
      if (this.user !== '' && this.password !== '') {
        store.commit('login', {
          user: this.user,
          password: this.password
        })
        this.$router.push('/index')
      } else {
        alert('请输入正确的用户名和密码！')
      }
    }
  }
}
</script>

<style scoped>
    * {
        padding: 0;
        margin: 0
    }
    body {
        padding: 0;
        margin: 0
    }
    .home {
        display: flex;
        flex-flow: column;
        align-items: center
    }
    form {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        /* width: 150px */
    }
    input {
        border-top: 0;
        border-left: 0;
        border-right: 0;
        border-bottom: 1px black solid;
        width: 280px;
        margin-bottom: 30px
    }
    .title {
        font-size: 30px;
        margin: 70px 0 50px;
    }
    .title span {
        background-color: #ffc300;
        padding: 10px;
    }
    .btn {
        display: block;
        margin: 20px auto 230px;
        width: 280px;
        height: 40px;
        background-color: #463600;
        border-color: #463600;
        border-radius: 4px;
        color: white;
        font-size: 16px
    }
</style>
