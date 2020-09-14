import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import store from './store'

Vue.config.productionTip = false


Router.beforeEach((to, from, next) => {
if (to.path === "/users/1") {
  next('/');
}
  next();
});

new Vue({
  router:Router,
  store,
  render: h => h(App),
}).$mount('#app')
