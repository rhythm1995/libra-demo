/**
 * home router group
 */

export default () => {
  const homeRouteGroup = [
		{
			path: '/home',
			component: () => import(/* webpackChunkName: "home" */ '../page/HomePage'),
			meta: { title: '首页' }
		}
	]

  return homeRouteGroup;
};
