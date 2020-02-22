import Vue from 'vue'
import Toast from '../components/modal/Toast.vue'

const ModalToast = Vue.extend(Toast)
Toast.install = function (data) {
  let instance = new ModalToast({
    data
  }).$mount()
  document.body.appendChild(instance.$el)
  return instance
}

export default Toast