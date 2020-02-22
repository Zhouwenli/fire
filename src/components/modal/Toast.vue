<template>
 <transition name='fade'>
    <!-- 蒙版 -->
    <div class="modal-mask" v-if="show" @touchmove.prevent>
      <div class="toast">{{toastMessage}}</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'toast',
  created () {
    console.log(this, 1111)
	},
	destroyed(){
		this.timer && clearTimeout(this.timer)
	},
  data () {
    return {
      show: false,
			toastMessage:'111',
			time:2000
    }
  },
  methods: {
    showModal () {
			this.show = true
			this.timer = setTimeout(()=>{
				this.show = false
			},this.time)
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
		.toast
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
</style>
