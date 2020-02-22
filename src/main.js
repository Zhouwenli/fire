import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
import axios from './request'
import ModalToast from './utils/modalToast'
import store from './store/index'
import ModalDialog from './utils/modalDialog'
import ModalAlert from './utils/modalAlert'
import loading from './utils/modalLoading.js' // 引入loading
import echarts from "echarts" //引入echarts
Vue.prototype.$echarts = echarts //全局挂载echarts
Vue.use(loading) // 全局使用loading
//全局挂载alert弹框
Vue.prototype.$alert = ModalAlert.install
//vue全局挂在dialog弹窗组建
Vue.prototype.$dialog = ModalDialog.install
//vue全局挂载toast弹窗组件
Vue.prototype.$toast = ModalToast.install

Vue.config.productionTip = false
//vue全局挂载axios
Vue.prototype.$http = axios

//修改页面title
router.beforeEach((to,from,next) =>{
  if(to.meta.title){
    document.title = to.meta.title
  }
  next()
})

let $vue =new Vue({
  router,
  store,//加入store对象
  render: h => h(App)
}).$mount('#app')

export default $vue
