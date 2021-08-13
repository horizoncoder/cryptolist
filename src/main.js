import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueAxios from "vue-axios"
import axios from 'axios'
import VueMaterial from "vue-material"
import VueLodash from 'vue-lodash'
import  lodash  from 'lodash'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import 'bootstrap'
import 'jquery'
Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(VueAxios,axios)
Vue.use(VueLodash,lodash)
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
