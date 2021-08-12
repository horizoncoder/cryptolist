import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueAxios from "vue-axios"
import axios from 'axios'
import VueMaterial from "vue-material"
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(VueAxios,axios)
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
