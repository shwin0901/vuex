<template>
  <div class="video1">
    <h1>学习中心</h1>
    <video class="vid" src="../assets/123167912-1-32.mp4" controls poster="../assets/123.jpg"></video>
    <div class="brief">
      <h3>简介</h3>
      <p>动物是生物的一个种类。它们一般以有机物为食，能感觉，可运动，能够自主运动。活动或能够活动之物。</p>
    </div>
    <div class="annotation">
      注:
      <span>分享即可获得免费的一个月vip特权(已是vip分享不再获得vip会员！)</span>
    </div>
    <button class="btn" @click="share()">分享</button>
  </div>
</template>

<script>
import store from '../store/index'

export default {
  name: 'video1',
  methods: {
    share () {
      let c = confirm('课程分享，地址：http://www.baidu.com')
      if (c) {
        if (store.state.user === '普通会员') {
          store.commit('pay', 'VIP1会员')
          alert('分享成功，您已获得一个月的高级vip会员！')
        } else {
          alert('分享成功！')
        }
      }
    }
  }
}
</script>

<style scoped>
.video1 {
  padding: 50px 30px 0;
  display: flex;
  flex-flow: column;
  align-items: center;
}
.vid {
  width: 100%;
}
p {
  text-indent: 2em;
}
.btn {
  height: 50px;
  width: 100%;
  background-color: #463600;
  border-radius: 4px;
  color: white;
  font-size: 18px;
  border: 0;
  margin-top: 14px;
  font-weight: 500;
}
.brief {
  padding: 20px 0 0;
  width: 100%;
}
.annotation {
  color: #666666;
  width: 100%;
  padding-top: 50px;
}
</style>>
