<template>
  <div class="Good">
    <p class="titleName">智慧监管</p>
    <ul>
      <li>
        <div class="divLeft">
          <img src="../assets/img/goods/123.png" alt="">
        </div>
        <div class="divRight">
          <p class="divRightBig">用电隐患</p>
          <p class="divRightSmall">慧用电安全隐患预警</p>
          <router-link :to="{path:'/ElectricityUtilization'}">
            <span class="look">点击查看</span>
          </router-link>
        </div>
      </li>
      <li>
        <div class="divLeft">
          <img src="../assets/img/goods/fireAlarm_icon.png" alt="">
        </div>
        <div class="divRight">
          <p class="divRightBig">火灾预警</p>
          <p class="divRightSmall">重点部位火灾自动报警</p>
           <router-link :to="{path:'/FireAlarm'}">
            <span class="look">点击查看</span>
          </router-link>
        </div>
      </li>
      <li>
        <div class="divLeft">
          <img src="../assets/img/goods/waterAlarm_icon.png" alt="">
        </div>
        <div class="divRight">
          <p class="divRightBig">用水监测</p>
          <p class="divRightSmall">重点部位建筑消防用水监测</p>
          <router-link :to="{path:'/WaterAlarm'}">
            <span class="look">点击查看</span>
          </router-link>
        </div>
      </li>
      <li>
        <div class="divLeft">
          <img src="../assets/img/goods/videoAlarm_icon.png" alt="">
        </div>
        <div class="divRight">
          <p class="divRightBig">可视监管</p>
          <p class="divRightSmall">重点部位在线可视监管</p>
          <span class="look">点击查看</span>
        </div>
      </li>
      <li>
        <div class="divLeft">
          <img src="../assets/img/goods/indexChk_icon.png" alt="">
        </div>
        <div class="divRight">
          <p class="divRightBig">巡查检查</p>
          <p class="divRightSmall">重点部位巡查检查情况一般</p>
          <span class="look">点击查看</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'goods',
  data () {
    return {

    }
  },
  methods:{


  }
}
</script>

<style scoped lang="stylus">
.Good
  padding-bottom 120px
  background-color #fff
  .titleName
    padding 0 30px
    height 80px
    line-height 80px
    font-size 30px
    text-align left
  ul
    li
      width 90%
      padding 10px 0
      margin 30px auto
      border-radius 10px
      overflow hidden
      box-shadow: #888 1px 1px 10px
      // box-shadow: 5px 5px 5px #888888;
      .divLeft
        width 15%
        height 120px
        float left
        img
          margin-top 30px
          width 62px
      .divRight
        text-align left
        height 120px
        width 85%
        float left
        position relative
        .divRightBig
          font-size 28px
          padding-top 30px
        .divRightSmall
          font-size 24px
          color #999999
          padding 20px 0
        .look
          font-size 26px
          color #FFFFFF
          background-color #3293EA
          padding 10px
          border-radius 7px
          position absolute
          right 10px
          bottom 20px



</style>
