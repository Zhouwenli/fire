<template>
  <div id="tabbar">
    <cube-tab-bar v-model="selectedLabelDefault" @click="clickHandler">
        <!-- <router-link v-for="item in tabs" :key="item.path" :to="item.path">
          {{item.label}} -->
          <cube-tab v-for="item in tabs" :icon="item.icon" :label="item.label" :value="item.path" :key="item.path">
          </cube-tab>
        <!-- </router-link> -->
    </cube-tab-bar>
  </div>
</template>

<script>
export default {

  name: 'TabBar',
  props: {
    msg: String
  },
  data () {
    return {
      selectedLabelDefault: '/',
      tabs: [{
        label: '首页',
        icon: 'cubeic-home',
        path: '/'
      }, {
        label: '我的',
        icon: 'cubeic-person',
        path: '/My'
      }]
    }
  },
  methods: {
    clickHandler (path) {
      // if you clicked home tab, then print 'Home'
      console.log('跳转path', path)
      this.$router.push(path)
    },
    changeHandler (label) {
      // if you clicked different tab, this methods can be emitted
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
#tabbar
  position fixed
  bottom 0
  width 100%
  height 100px
  z-index 111
  background-color #fff
  border-top 1px solid #dfdfdd
>>>.cube-tab
  padding 0
  height 100px
  // display flex
  // justify-content center
  // align-items center
>>>.cube-tab i
  font-size 40px
  display block
  margin-top 15px
  margin-bottom 8px
>>>.cube-tab div
  font-size 22px
  line-height 28px
  padding-bottom 10px
>>>.cube-tab_active{
  color #3293ea
}
</style>
