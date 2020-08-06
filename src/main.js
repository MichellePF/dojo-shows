import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import VueFirestore from 'vue-firestore';       // adding this import
Vue.config.productionTip = false;
Vue.use(VueFirestore, {key: 'id'});   

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
