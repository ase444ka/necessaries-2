import Vue from 'vue';
import VueRouter from 'vue-router';
import { createPinia, PiniaVuePlugin } from 'pinia';
import { routes } from '/src/router.js';

import App from '/src/App.vue';
import './assets/main.scss'

Vue.use(PiniaVuePlugin);
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  props: true,
  routes, // short for `routes: routes`
});

new Vue({
  router,
  pinia: createPinia(),
  render: (h) => h(App),
}).$mount('#app');
