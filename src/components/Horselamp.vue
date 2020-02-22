<template>
  <div class="notice">
    <span><i class="cubeic-volume"></i></span>
    <p class="animate">1.做好安全措施 2.防火灭火 3.防水防洪全市动员起来 4.防水防洪全市动员起来 5.xxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>

  </div>
</template>

<script>
</script>

<style scoped lang="stylus">
.cubeic-volume
  color #3293ea
.animate {
    font-size:28px;
    color: #666;
    white-space: nowrap;
    animation: 15s wordsLoop linear infinite normal;
}

@keyframes wordsLoop {
    0% {
        transform: translateX(200px);
        -webkit-transform: translateX(200px);
    }
    100% {
        transform: translateX(-100%);
        -webkit-transform: translateX(-100%);
    }
}

@-webkit-keyframes wordsLoop {
    0% {
        transform: translateX(200px);
        -webkit-transform: translateX(200px);
    }
    100% {
        transform: translateX(-100%);
        -webkit-transform: translateX(-100%);
    }
}
.notice
  position fixed
  height 80px
  line-height 80px
  top 0
  z-index 111
  background-color #fff
  span
    position fixed
    left 0
    top 0
    background-color #fff
    z-index 222
    padding-left 20px

</style>
