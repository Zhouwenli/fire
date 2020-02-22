<template>
  <div>
    <div class="kind">
      <ul>
        <li v-for="(item,index) in flexItem" :key="index" @click="item.clickEvent" >
          <img  class="kindImg" :src="item.img" alt=""><p>{{item.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'kind',
  mounted(){
    console.log(this.flexItem)
  },
  data () {
    return {
      flexItem: [{
        img: require('./../assets/img/kind/1.png'),
        name: '检查记录',
        clickEvent: () => {
          this.$router.push({
            path: "/NumberList",
            query: {
              mobile_operator_type:1
            }
          })
        }
      }, {
        img: require('./../assets/img/kind/2.png'),
        name: '案件受理',
        clickEvent: () => {
          this.$router.push({
            path: "/NumberList",
            query: {
              mobile_operator_type:2
            }
          })
        }
      }, {
        img: require('./../assets/img/kind/3.png'),
        name: '消防隐患',
        clickEvent: () => {
          this.$router.push({
            path: "/NumberList",
            query: {
              mobile_operator_type:3
            }
          })
        }
      }, {
        img: require('./../assets/img/kind/4.png'),
        name: '已运行单位',
        clickEvent: () => {
          this.$router.push({
            path: "/NumberList",
            query: {
              mobile_operator_type:5
            }
          })
        }
      }, {
        img: require('./../assets/img/kind/3.png'),
        name: '单位分布',
        clickEvent: () => {
          this.$router.push({
            path: "/NumberList",
            query: {
              pattern_value:'AAA'
            }
          })
        }
      }, {
        img: require('./../assets/img/kind/1.png'),
        name: '法律法规',
        clickEvent: () => {
          this.$router.push({
            path: "/NumberList",
            query: {
              pattern_value:'ABC'
            }
          })
        }
      }, {
        img: require('./../assets/img/kind/2.png'),
        name: '开始检查',
        clickEvent: () => {
          this.$router.push({
            path: "/NumberList",
            query: {
              pattern_value:'ABC'
            }
          })
        }
      }, {
        img: require('./../assets/img/kind/3.png'),
        name: '新闻',
        clickEvent: () => {
          this.$router.push({
            path: "/NumberList",
            query: {
              pattern_value:'ABC'
            }
          })
        }
      }, {
        img: require('./../assets/img/kind/4.png'),
        name: '酒博会单位',
        clickEvent: () => {
          this.$router.push({
            path: "/NumberList",
            query: {
              pattern_value:'ABC'
            }
          })
        }
      }]
    }
  }
}
</script>

<style scoped lang="stylus">
.kind
  width 100%
  margin-bottom 20px
ul
  width 100%
  overflow hidden
  display flex
  justify-content flex-start
  flex-wrap wrap
  background-color #fff
  padding-bottom 10px
li
  width 25%
  height 167px
  font-size 26px
  text-align center
.kindImg
  width 85px
  height 85px
  margin-top 28px
  margin-bottom 10px
</style>
