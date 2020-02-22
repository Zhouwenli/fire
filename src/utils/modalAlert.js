import Vue from 'vue'
import Alert from '../components/modal/Alert.vue'

const ModalAlert = Vue.extend(Alert)
Alert.install = function (data) {

  let alertInstance = new ModalAlert({
    data
  }).$mount()

  document.body.appendChild(alertInstance.$el)
  return alertInstance
}

export default Alert
