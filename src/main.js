
/* eslint-disable */
/* 基础组件 */
import Vue from 'vue';
import App from './App.vue';

/* 内部模块 */
import router from './router';

/* 样式库 */
import 'babel-polyfill';
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

/* 公共模块 */
import request from './public/request'; // http库
import constant from './public/constant'; // 常量
import storage from './public/storage'; // 存储
import help from './public/help'; // 被多处使用的辅助公共函数
import apiFactory from './api'; // api工厂

/* 挂载公共模块到Vue原型链上 */
Vue.prototype.$constant = constant; // 常量
Vue.prototype.$help = help; // 辅助方法
Vue.prototype.$storage = storage; // 本地存储 localstorage
Vue.prototype.$api = apiFactory(request); // 尽量采用这种方式定义接口实现复用
Vue.prototype.$http = request;

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
