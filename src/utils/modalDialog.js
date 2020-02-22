import Vue from 'vue'
// import Toast from '../components/modal/Toast.vue'
import Dialog from '../components/modal/Dialog.vue'

// const ModalToast = Vue.extend(Toast)
const ModalDialog = Vue.extend(Dialog)
Dialog.install = function (data) {
  // let toastInstance = new ModalToast({
  //   data
  // }).$mount()

  let dialogInstance = new ModalDialog({
    data
  }).$mount()

  // document.body.appendChild(toastInstance.$el)
  document.body.appendChild(dialogInstance.$el)
  return dialogInstance
}

export default Dialog
