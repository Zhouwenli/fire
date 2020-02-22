<template>
 <transition name='fade'>
    <!-- 蒙版 -->
    <div class="modal-mask" v-if="show" @touchmove.prevent>
      <div class="alert" v-if="type ==='1'">
        <div>
          <div class="titletext" v-if="title">{{title}}</div>
          <div class="content">{{alertMessage}}</div>
          <div class="button">
          	<span @click="comfirmEvent">{{btnName}}</span>
          </div>
        </div>
			</div>
      <div class="img-div" v-else-if="type==='2'">
        <div class="img-poisition"><img :src="imgName" alt=""></div>
        <div class="button-img">
        	<span @click="comfirmEvent">{{btnName}}</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  //type为1是alert弹窗，type为2是企业资质类弹窗
export default {
  name: 'Modalalert',
  created () {
    console.log(this, 1111)
	},
	destroyed(){
		this.timer && clearTimeout(this.timer)
	},
  data () {
    return {
      show: false,
      title:'',
			alertMessage:'33333',
      btnName:'确认提交',
      comfirm:null,
      cancel:null,
      type:'',
      imgName:''
    }
  },
  methods: {
    cancelEvent (){
      this.hideModal()
      if(typeof this.cancel === "function") { //是函数    其中 FunName 为函数名称
         this.cancel()
      } else { }//不是函数
    },
    comfirmEvent() {
      this.hideModal()
      if(typeof this.comfirm === "function") { //是函数    其中 FunName 为函数名称
         this.comfirm()
      } else { }//不是函数
    },
    showModal () {
			this.show = true
    },
    hideModal () {
			this.show = false
    }
  }
}
</script>
<style lang="stylus" scoped>
	.fade-enter
	.fade-leave-active
			opacity 0
	.fade-enter-active
	.fade-leave-active
			transition opacity .35s;
</style>
<style lang="stylus">
  .modal-mask
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    z-index 9999
    background rgba(0,0,0,0.7)
    .img-div
      position absolute
      left 50%
      top 50%
      transform translateX(-50%) translateY(-50%)
      display inline-block
      padding 15px 28px
      // background #eeeeee
      text-align center
      color #000000
      font-size 30px
      border-radius 10px
      white-space nowrap
      letter-spacing 2px
      .img-poisition
        width 530px
        height 630px
        background-image url(./../../assets/img/shuiyin.png)
        background-size cover
        background-color #FFFFFF
        border-radius 10px
        overflow hidden
        img
          width 530px
          height 630px
      .button-img
        width 530px
        span
          width 530px
          height 90px
          display inline-block
          background-color #3293EA
          color #fff
          font-size 34px
          line-height 90px
          border-radius 160px
          margin-top 30px
		.alert
      position absolute
      left 50%
      top 50%
      transform translateX(-50%) translateY(-50%)
      display inline-block
      padding 15px 28px
      background #eeeeee
      text-align center
      color #000000
      font-size 30px
      border-radius 10px
      white-space nowrap
      letter-spacing 2px
      .titletext
        padding 58px 0 0
        color #f19e2b
        font-size 30px
      .content
        width 420px
        padding 40px 40px 0
        line-height 40px
        white-space normal
        word-break break-all
        overflow hidden
        font-size 28px
      .button
        padding 48px 40px 40px
        width 420px
        display flex
        justify-content space-between
        span
          width 420px
          height 80px
          display inline-block
          background-color #3293EA
          color #fff
          font-size 30px
          line-height 80px
          border-radius 10px


</style>
