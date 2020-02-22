<template>
 <transition name='fade'>
    <!-- 蒙版 -->
    <div class="modal-mask" v-if="show" @touchmove.prevent>
      <div class="dialog">
        <div class="titletext">{{title}}</div>
				<div class="content">{{dialogMessage}}</div>
				<div class="button">
					<span @click="cancelEvent">{{cancelBtn}}</span><span @click="comfirmEvent">{{sureBtn}}</span>
				</div>
			</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modaldialog',
  created () {
    console.log(this, 1111)
	},
	destroyed(){
		this.timer && clearTimeout(this.timer)
	},
  data () {
    return {
      show: false,
      title:'即将调用QQ聊天',
			dialogMessage:'33333',
      comfirm:null,
      cancel:null,
      cancelBtn:'',
      sureBtn:'',
      params:''
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
         this.comfirm(this.params)
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
		.dialog
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
        padding 58px 0 40px
        color #f19e2b
        font-size 30px
      .content
        width 420px
        padding 0px 40px
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
          width 200px
          height 80px
          display inline-block
          background-color #3293EA
          color #fff
          font-size 30px
          line-height 80px
          border-radius 10px

</style>
