
/* eslint-disable */
/* 基础组件 */
import Vue from 'vue';
import App from './App.vue';

/* 内部模块 */
import router from './router';

/* 样式库 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
// import './assets/css/theme-green/index.css'; // 浅绿色主题
import './assets/css/icon.css';
// import './components/common/directives';
import 'babel-polyfill';

/* 公共模块 */
import request from './public/request'; // http库
import constant from './public/constant'; // 常量
import storage from './public/storage'; // 存储
import help from './public/help'; // 被多处使用的辅助公共函数
import apiFactory from './api';

/* 挂载公共模块到Vue原型链上 */
Vue.prototype.$constant = constant; // 常量
Vue.prototype.$help = help; // 辅助方法
Vue.prototype.$storage = storage; // 本地存储 localstorage
Vue.prototype.$api = apiFactory(request); // 尽量采用这种方式定义接口实现复用
Vue.prototype.$http = request;

Vue.config.productionTip = false;
Vue.use(ElementUI, {
  size: 'small'
});

/* 使用钩子函数对路由进行权限跳转 */
router.beforeEach((to, from, next) => {
  const role = storage.get('ms_username');
  if (!role && to.path !== '/login') {
    next('/login');
  } else if (to.meta.permission) {
    // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
    role === 'admin' ? next() : next('/403');
  } else {
    next();
  }
});

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
