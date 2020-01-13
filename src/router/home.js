/**
 * home router group
 */

export default () => {
  const homeRouteGroup = [
		{
			path: '/dashboard',
			component: () => import(/* webpackChunkName: "dashboard" */ '../page/Dashboard.vue'),
			meta: { title: '系统首页' }
		},
		{
			path: '/icon',
			component: () => import(/* webpackChunkName: "icon" */ '../page/Icon.vue'),
			meta: { title: '自定义图标' }
		},
		{
			// 权限页面
			path: '/permission',
			component: () => import(/* webpackChunkName: "permission" */ '../page/Permission.vue'),
			meta: { title: '权限测试', permission: true, fromTitle: '错误处理', fromIndex: 'error' }
		},
		{
			path: '/404',
			component: () => import(/* webpackChunkName: "404" */ '../page/404.vue'),
			meta: { title: '404', fromTitle: '错误处理', fromIndex: 'error' }
		},
		{
			path: '/403',
			component: () => import(/* webpackChunkName: "403" */ '../page/403.vue'),
			meta: { title: '403', fromTitle: '错误处理', fromIndex: 'error' }
		}
	]

  return homeRouteGroup;
};
