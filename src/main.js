import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import './assets/styles/element-variables.scss'
import './assets/icons' // icon
import download from './plugins/download' // plugins

Vue.prototype.$download = download
Vue.config.productionTip = false
Vue.use(Element)
new Vue({
  render: h => h(App)
}).$mount('#app')
