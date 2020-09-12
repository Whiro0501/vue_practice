import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber'

Vue.config.productionTip = false
Vue.component("LikeNumber", LikeNumber)
Vue.directive("border", {
    bind(el, bindingm vnode) {},
    inserted() {},
    update(el, bindingm vnode) {},
    componentUpdated() {},
    unbind() {},
});

new Vue({
    render: h => h(App),
}).$mount('#app')

console.log(App);