<template>
  <div>
    <comheader :dataTitle="dataTitle"></comheader>
    <div class="guide">
      <div class="label-titel">选号中心</div>
      <ListBox :listData="numberCenter" />
      <div class="label-titel">个人订单</div>
      <ListBox :listData="personOrder" />
      <div class="label-titel">关于我们</div>
      <ListBox :listData="aboutMe" />
    </div>
  </div>
</template>

<script>
import ListBox from '../components/ListBox.vue'
import comheader from '@/components/Header.vue'
export default {
  name: 'guide',
  components: {
    ListBox,
    comheader
  },
  data () {
    return {
      dataTitle: '导航',
      numberCenter: [{
        img: require('./../assets/img/icon-1.png'),
        name: '移动号码',
        clickEvent: () => {
          console.log('跳转')
          this.$router.push({
            path: "/NumberList",
            query: {
              mobile_operator_type:1
            }
          })
        }
      }, {
        img: require('./../assets/img/icon-2.png'),
        name: '联通号码',
        clickEvent: () => {
          this.$router.push({
            path: "/NumberList",
            query: {
              mobile_operator_type:2
            }
          })
        }
      }, {
        img: require('./../assets/img/icon-3.png'),
        name: '电信号码',
        clickEvent: () => {
          this.$router.push({
            path: "/NumberList",
            query: {
              mobile_operator_type:3
            }
          })
        }
      }, {
        img: require('./../assets/img/icon-4.png'),
        name: '虚商号码',
        clickEvent: () => {
         this.$router.push({
           path: "/NumberList",
           query: {
             mobile_operator_type:5
           }
         })
        }
      }, {
        img: require('./../assets/img/icon-5.png'),
        name: '豹子号码',
        clickEvent: () => {
          this.$router.push({
            path: "/NumberList",
            query: {
              pattern_value:'AAA'
            }
          })
        }
      }, {
        img: require('./../assets/img/icon-6.png'),
        name: '顺子号码',
        clickEvent: () => {
          this.$router.push({
            path: "/NumberList",
            query: {
              pattern_value:'ABC'
            }
          })
        }
      }],
      personOrder: [{
        img: require('./../assets/img/icon-7.png'),
        name: '我的订单',
        clickEvent: () => {
          console.log('跳转')
          this.$router.push('/order')
        }
      }, {
        img: require('./../assets/img/icon-8.png'),
        name: '我的收藏',
        clickEvent: () => {
          console.log('跳转')
          this.$router.push('/collect')
        }
      }, {
        img: require('./../assets/img/icon-12.png'),
        name: '我的地址',
        clickEvent: () => {
          console.log('跳转')
          this.$router.push('/AddressManage')
        }
      }, {
        img: require('./../assets/img/icon-13.png'),
        name: '卡片激活',
        clickEvent: () => {
          console.log('跳转')
          window.location.href='http://www.xushangkaihu.com'
        }
      }, {
        img: '',
        name: '',
        clickEvent: () => {
        }
      }, {
        img: '',
        name: '',
        clickEvent: () => {

        }
      }],
      aboutMe: [{
        img: require('./../assets/img/icon-9.png'),
        name: '联系我们',
        clickEvent: () => {
          this.aboutMeFuc()
        }
      }, {
        img: require('./../assets/img/icon-10.png'),
        name: '商务合作',
        clickEvent: () => {
          console.log('跳转')
          this.$router.push('/cooperate')
        }
      }, {
        img: require('./../assets/img/icon-11.png'),
        name: '关于我们',
        clickEvent: () => {
          console.log('跳转')
        }
      }]
    }
  },
  methods:{
    comfirmBack:function(){
      window.location.href='http://wpa.qq.com/msgrd?v=3&uin=898334448&site=qq&menu=yes'
    },
    aboutMeFuc:function(){
      let dialog = this.$dialog({
       title:'即将调用QQ聊天',
       dialogMessage:'确认即将跳转QQ直接联系商户',
       cancelBtn:'取消',
       sureBtn:'确认跳转',
       comfirm:this.comfirmBack
      })
      dialog.showModal();
    }
  }
}
</script>

<style scoped lang="stylus">
.guide
  width 100%
  padding-top 80px
  padding-bottom 110px
.label-titel{
  height 70px
  line-height 70px
  text-align center
  font-size 28px
  background rgb(240,240,240)
}
.cube-alert-main
  width 500px
  height 345px
  background-color #ffffff
  color red

</style>
