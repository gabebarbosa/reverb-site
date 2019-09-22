import Vue from 'vue'
import App from './App.vue'
import twitter from 'vue-twitter'

Vue.use(twitter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
