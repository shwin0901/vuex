<template>
  <div class="user-center">
    <h1>
      用户中心
    </h1>
    <div class="message">
      <span>账号</span><span>{{username}}</span>
    </div>
    <div class="message">
      <span>身份</span><span>{{userstaus}}</span>
    </div>
    <div class="card">
      <div class="card-list" v-for="list in lists" :key="list.id">
        <h3>{{list.vip}}</h3>
        <div class="card-list-msg">
          <div>
            <div class="card-list-moneny">{{list.charge}}元</div>
            <span class="card-list-day">/30天</span>
          </div>
          <button class="pay" @click="pay(list.vip)">购买</button>
        </div>
      </div>
    </div>
    <h1></h1>
  </div>
</template>

<script>
import store from '../store/index'

export default {
  name: 'userCenter',
  data () {
    return {
      lists: [
        {
          id: 1,
          vip: '普通会员',
          charge: '10.00'
        },
        {
          id: 2,
          vip: 'VIP1会员',
          charge: '50.00'
        },
        {
          id: 3,
          vip: 'VIP3会员',
          charge: '100.00'
        },
        {
          id: 4,
          vip: 'VIP5会员',
          charge: '500.00'
        },
        {
          id: 5,
          vip: 'VIP9会员',
          charge: '1000.00'
        },
        {
          id: 6,
          vip: 'VIP12会员',
          charge: '1200.00'
        }
      ],
      username: store.state.userName,
      userstaus: store.state.user
    }
  },
  methods: {
    pay (ivp) {
      alert('购买成功')
      store.commit('pay', ivp)
      this.userstaus = ivp
    }
  }
}
</script>

<style>
  .user-center {
    margin: 50px 30px 0;
    display: flex;
    flex-flow: column;
    align-items: center
  }
  .message {
    width: 100%;
    display: flex;
    justify-content: space-between
  }
  .card {
    width: 100%;
  }
  .card-list {
    padding: 12px;
    margin-bottom: 20px;
    background: linear-gradient(to top left,rgb(234, 124, 62), rgb(173, 26, 139));
    border-radius: 4px;
  }
  .card-list>h3 {
    color: white
  }
  .card-list-moneny {
    display: inline-block;
    font-size: 24px;
    padding: 10px 6px 0 0;
    color: rgb(255, 153, 0);
    font-weight: 500
  }
  .card-list-msg {
    display: flex;
    justify-content: space-between;
    align-items: flex-end
  }
  .card-list-day {
    color: white
  }
  .pay {
    padding: 8px 14px;
    background-color: transparent;
    border-radius: 2px;
    border: 1px solid white;
    font-size: 16px;
    color: white;
    font-weight: 500;
  }
</style>
