<template>
  <div>
    <div class="searchTop">
      <input type="text"> <span>查询</span>
    </div>
    <ul>
      <li v-for="(item,i) in 10" >
        <div class="listLeft">
          <router-link :to="{path:'/Monitor'}">
            <img src="../assets/img/electricity/video1.png" alt="">
          </router-link>
          
        </div>
        <div class="listRight">
          <p class="listRightWord">单位：北京华联综合超市股份有限公司</p>
          <p class="listRightBtn">
            <router-link :to="{path:'/ElectricityUtilizationListen'}">
              <span class="listen">报警</span>
            </router-link>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ElectricityUtilization',
  components: {
  },
}
</script>
<style scoped lang="stylus">
.searchTop
  height 90px
  line-height 90px
  background-color #fff
  input
    width 80%
    border 1px solid #DFDFDD
    vertical-align middle
    // border-radius 5px
    // margin 15px 5px
  span
    font-size 30px
    color #FFFFFF
    background-color #06C250
    padding 10px
ul
  width 92%
  margin 0 auto
  li
    background-color #FFFFFF
    margin-top 30px
    overflow hidden
    padding 20px 0
    box-shadow: #888 1px 1px 10px
    border-radius 10px
    .listLeft
      width 30%
      float left
      img
        width 150px
    .listRight
      width 70%
      float left
      .listRightWord
        font-size 26px
        color #999999
        text-align left
        padding 10px 0
      .listRightBtn
        height 80px
        padding-top 30px
        text-align left
        span
          font-size 30px
          padding 15px 20px
          margin-right 20px
          border-radius 10px
          display inline-block
          &.listen
            color #FFFFFF
            background-color #F43530


</style>
