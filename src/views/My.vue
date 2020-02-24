<template>
  <div>
    <div class="myTitle">
      <div class="myTitleLeft">
        <img src="../assets/img/my/1.jpg" alt="">
      </div>
      <div class="myTitleRight"></div>
    </div>
    <ul class="myUl">
      <li class="myLi">登录名 <span class="myLitext">md_test</span></li>
      <li class="myLi">姓名 <span class="myLitext">md</span></li>
      <li class="myLi">单位 <span class="myLitext">云岩区消防大队</span></li>
      <li class="myLi">离线数据 <span class="myLiBtn">立即同步</span></li>
      <li class="myLi">未添加读卡器 <span class="myLiBtn">连接设备</span></li>
      <p class="loginOut">注销登录</p>
    </ul>
  </div>
</template>

<script>

</script>

<style scoped lang="stylus">
.myTitle
  overflow hidden
  border-bottom 1px solid #DFDFDD
  .myTitleLeft
    float left
    width 30%
    padding-top 20px
    img
      width 160px
  .myTitleRight
    float left
    width 70%
.myUl
  width 90%
  margin 0 auto
  .myLi
    font-size 28px
    height 80px
    line-height 80px
    text-align left
    border-bottom 1px solid #DFDFDD
    span
      float right
      &.myLitext
        color #3293EA
      &.myLiBtn
        background-color #3293EA
        color #FFFFFF
        height 50px
        line-height 50px
        border-radius 5px
        display inline-block
        margin-top 15px
        padding 0px 5px
  .loginOut
    width 50%
    margin 20px auto
    height 80px
    line-height 80px
    font-size 30px
    color #FFFFFF
    background-color #3293EA
    border-radius 50px
</style>
