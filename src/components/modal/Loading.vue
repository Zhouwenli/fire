<template>
  <div v-if="show" class="loading-container">
    <div v-if="mask" class="loading-mask"></div>
    <div class="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default{
  name:'loading',
  props:{
    show:false,
    mask:false
  }
}
</script>

<style lang="stylus" scoped>
.loading-container
  position: relative;
  text-align: center;
  .loading-mask
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    // background-color:rgba(0,0,0,.7);
    background-color #fff
    z-index 111111111
.loading
    width: 80px
    height: 40px
    margin: 0 auto
    left 45%
    display flex
    justify-content space-between
    position fixed
    top 50%
    z-index 111111111111
.loading span
    display: inline-block
    width: 10px
    height: 100%
    border-radius: 4px
    background: lightgreen
    -webkit-animation: load 1s ease infinite
    animation: load 1s ease infinite
@-webkit-keyframes load{
  0%,100%{
      height: 40px;
      background: lightgreen;
  }
  50%{
      height: 70px;
      margin: -15px 0;
      background: lightblue;
  }
}
.loading span:nth-child(2)
    -webkit-animation-delay: 0.2s
    animation-delay: 0.2s
.loading span:nth-child(3)
    -webkit-animation-delay: 0.4s
    animation-delay: 0.4s
.loading span:nth-child(4)
    -webkit-animation-delay: 0.6s
    animation-delay: 0.6s
.loading span:nth-child(5)
    -webkit-animation-delay: 0.8s
    animation-delay: 0.8s

</style>
