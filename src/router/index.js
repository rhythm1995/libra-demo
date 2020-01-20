import Vue from 'vue';
import Router from 'vue-router';
import home from './home';

Vue.use(Router);

/**
 * 权限管理permission取值
 */
const router = new Router({
  routes: [
    {
      path: '/home',
      component: () =>
        import(
          /* webpackChunkName: "home" */ '@/page/Home.vue'
        ),
      children: [
        ...home(),
      ]
    },
    {
      path: '/search',
      component: () =>
        import(
          /* webpackChunkName: "search" */ '@/page/Search.vue'
        )
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
});

/* 使用钩子函数对路由进行权限跳转 */
/*
router.beforeEach((to, from, next) => {
	// 登录状态判断
	if (!Vue.prototype.$storage.get('token') && to.path !== '/login') {
		next('/login');
	} else {
		next();
  }

	// 权限状态判断
	const role = Vue.prototype.$storage.getJson('role');
  if (!role && to.path !== '/login') {
    next('/login');
  } else if (to.meta.permission === 1) {
    role.roleType === 1 ? next() : next('/403');
  } else if (to.meta.permission === 2) {
		role.roleType === 2 ? next() : next('/403');
	} else if (to.meta.permission === 3) {
		role.roleType === 3 ? next() : next('/403');
	} else {
    next();
  }
});
*/

export default router;
