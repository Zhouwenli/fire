<template>
  <div :class="['comheader',postionType]">
   <i class="cubeic-back" @click="backFun"></i> {{headerTitle}}
  </div>
</template>

<script>
export default {
  props: ['dataTitle','postionType','backHandle'],
  data () {
    return {
      headerTitle: this.dataTitle
    }
  },
  methods:{
    backFun(){
      if(this.backHandle){
        this.backHandle()
        return
      }else{
        this.$router.back()
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.comheader
  width 100%
  height 80px
  line-height 80px
  text-align center
  font-size 30px
  color #333
  position fixed
  background-color #fff
  top 0
  z-index 111
  border-bottom 1px solid #f0f0f0
  &.relative
    position relative
>>>i
  position absolute
  left 20px
  font-size 40px
</style>
