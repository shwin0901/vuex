<template>
  <div class="about">
    <h1 class="title">您好</h1>
    <div class="introduce">
      尊敬的
      <span>{{user}}</span>,欢迎来到学习中心！
    </div>
    <form action class="list">
      <div v-for="course in courses" :key="course.id" class="list-item" @click="watch(course.vip)">
        <img src="../assets/logo.png" alt="">
        <div class="list-introduce">
          <div>{{course.title}}</div>
          <span>{{course.number}}</span>
          <h5>{{course.vip}}</h5>
        </div>
      </div>
    </form>
    <button class="btn" @click="pay()">充值</button>
  </div>
</template>

<script>
import store from '../store/index'

export default {
  name: 'index',
  data () {
    return {
      courses: [
        {
          id: 1,
          title: '学习vuex',
          number: '2233',
          vip: '免费课程'
        },
        {
          id: 2,
          title: '实战课程',
          number: '2233',
          vip: '实战课程'
        },
        {
          id: 3,
          title: 'v12会员专享课程',
          number: '2233',
          vip: 'v12专享课程'
        }
      ],
      user: store.state.user
    }
  },
  methods: {
    pay () {
      this.$router.push('/userCenter')
    },
    watch (vip) {
      switch (vip) {
        case '免费课程':
          alert('免费课程')
          this.$router.push('/video')
          break
        case '实战课程':
          if (this.user !== '普通会员') {
            alert('实战课程')
          } else {
            alert('会员等级不足，目前不能观看！')
          }
          break
        case 'v12专享课程':
          if (this.user === 'VIP12会员') {
            alert('v12专享课程')
          } else {
            alert('会员等级不足，目前无法观看！')
          }
          break
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
    .about {
      padding: 50px 30px 0;
      margin: 0;
      display: flex;
      flex-flow: column
    }
    .title {
      margin-bottom: 20px;
    }
    .introduce {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 12px
    }
    .introduce span {
      color: red
    }
    .list img {
      width: 40%;
      height: 100px;
    }
    .list-item {
      display: flex;
      flex-wrap: nowrap;
      margin-bottom: 26px
    }
    .list-introduce {
      padding-left: 20px;
      width: 60%;
      border-bottom: 1px solid #e2e2e2
    }
    .list-introduce>div {
      padding-bottom: 4px;
      font-size: 20px;
      font-weight: 500
    }
    .list-introduce>span {
      display: block;
      padding-bottom: 18px
    }
    .list-introduce>h5 {
      color: #f19827;
      font-size: 14px
    }
    .btn {
      height: 50px;
      background-color: #463600;
      border-radius: 4px;
      color: white;
      font-size: 18px;
      border: 0;
      margin-top: 14px;
      font-weight: 500
    }
</style>
