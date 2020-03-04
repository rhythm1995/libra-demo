/**
 * search router group
 */

export default () => {
  const searchRouteGroup = [
		{
			path: '/search',
			component: () => import(/* webpackChunkName: "search" */ '../page/SearchPage'),
			meta: { title: '搜索' }
		}
	]

  return searchRouteGroup;
};
