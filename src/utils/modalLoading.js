import Vue from 'vue'
import Loading from '../components/modal/Loading.vue'
// import LoadingHome from '../components/modal/LoadingHome.vue'

const ModalLoading = Vue.extend(Loading)
// const ModalHomeLoading = Vue.extend(LoadingHome)
const instance = new ModalLoading({//针对普通页设置loading
  el: document.createElement('div')
})

instance.show = false // 默认隐藏
instance.mask = false // 默认隐藏背景
const loading = {
  show(isShowHome) { // 显示方法
    instance.show = true
    instance.mask = isShowHome
    document.body.appendChild(instance.$el)
  },
  hide() { // 隐藏方法
    instance.show = false
  }
}

export default {
  install() {
    if (!Vue.$loading) {
      Vue.$loading = loading
    }
    Vue.mixin({
      created() {
        this.$loading = Vue.$loading
      }
    })
  }
}