<template>
  <div class="header">
   <span class="city" @click="clickHandlerCity">地市</span>
   <p @click="clickHandler"><span class="icon-searchIcom"></span>请输入号段</p>
   <router-link :to="{path:'/guide'}">
	  <span class="icon-navigation-big"></span>
   </router-link>
  </div>
</template>

<script>
export default {
  methods: {
    clickHandler () {
      this.$router.push('/SearchNumber')
    },
    clickHandlerCity () {
      this.$router.push('/SearchCity')
    }
  }
}
</script>

<style scoped lang="stylus">
 .header
  width 100%
  height 100px
  line-height 100px
  background-color #FFFFFF
  position fixed
  top 0
  z-index 1111
.header .city
  width 100px
  font-size 28px
  color #333
  display inline-block
  float left
  text-align center
.header p
  width 545px
  height 70px
  line-height 70px
  background-color #f0f0f0
  float left
  margin-top 15px
  text-align left
  color #CCCCCC
  font-size 30px
  text-indent 10px
  vertical-align middle
>>>.icon-searchIcom
  font-size 35px
  vertical-align middle
  margin-right 10px
>>>.icon-navigation-big
  font-size 55px
  vertical-align middle
</style>
