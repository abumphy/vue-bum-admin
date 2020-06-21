import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import 'normalize.css/normalize.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@/styles/index.scss' // global css 全局样式

import './icons' // icon

import { makeServer } from "./server"

if (process.env.NODE_ENV === "development") {
  makeServer()
}

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
