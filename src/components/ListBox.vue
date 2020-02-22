<template>
    <ul class="list-box">
        <li v-for="(item,index) in flexItem" v-on:click="item.clickEvent" :key="index" :class="index<=2?'nobor':''" >
            <img class="list-img" :src="item.img" alt="" v-if="item.img!=''">
            <p class="list-text">{{item.name}}</p>
        </li>
    </ul>
</template>

<script>
export default {
  name: 'listBox',
  props: ['listData'],
  data () {
    return {
      flexItem: this.listData
    }
  },
  created () {
    console.log(this.listData, '1')
  }
}
</script>

<style scoped lang="stylus">

.list-box
  width 100%
  overflow hidden
  display flex
  justify-content flex-start
  flex-wrap wrap
  background-color #fff
li
  display flex
  width 33.33%
  height 171px
  font-size 24px
  align-items center
  justify-content center
  flex-direction: column
  box-sizing border-box

li:nth-child(3n-1){
   border-left:1px solid #DFDFDD
   border-right:1px solid #DFDFDD
}
li:nth-child(4),li:nth-child(5),li:nth-child(6){
  border-top:1px solid #DFDFDD
}
.list-img
  display block
  width 66px
  height 53px
.list-text
  display block
  margin-top 22px
</style>
