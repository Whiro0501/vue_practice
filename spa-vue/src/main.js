import Vue from 'vue'
import App from './App.vue'
import Router from './router'

Vue.config.productionTip = false


Router.beforeEach((to, from, next) => {
if (to.path === "/users/1") {
  next('/');
}
  next();
});

new Vue({
  router:Router,
  render: h => h(App),
}).$mount('#app')
