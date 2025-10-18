/**
 * 登录路由的路径
 */
const LOGIN_ROUTE_PATH = '/user/login'

/**
 * 首页路由的路径
 */
const HOME_ROUTE_PATH = '/home'

/**
 * 根路由，所有的动态路由都会添加到这个路由下
 */
const ROOT_ROUTE_NAME = 'Root'

const notFoundRoute = {
  path: '/:path(.*)*',
  component: () => import(/* webpackChunkName: "404" */'@/views/fallback/404.vue'),
  meta: {
    title: '404',
  },
}

/**
 * 根路由，所有的动态路由都会添加到这个路由下
 */
const rootRoute = {
  path: '/',
  name: ROOT_ROUTE_NAME,
  component: () => import(/* webpackChunkName: "layout" */'@/components/layout/index.vue'),
  children: [],
  meta: {
    hideInBreadcrumb: true,
  },
}

/**
 * 忽略权限的路由
 */
const ignoreAccessRoutes = [
  {
    path: LOGIN_ROUTE_PATH,
    component: () => import(/* webpackChunkName: "login" */'@/views/user/login/index.vue'),
    meta: {
      title: '登录',
      requiresAuth: false,
    },
  },
]
/**
 * 权限路由，前端权限模式下会使用该数据，这里的路由放在菜单栏中
 */
const accessRoutes = [
  {
    path: HOME_ROUTE_PATH,
    component: () => import(/* webpackChunkName: "home" */'@/views/home/index.vue'),
    meta: {
      title: '首页',
      icon: 'material-symbols:dashboard-outline-rounded',
    },
  },
  {
    path: '/order',
    component: () => import(/* webpackChunkName: "order" */'@/views/order/index.vue'),
    meta: {
      title: '订单页',
      icon: 'mdi:order-bool-ascending-variant',
      roles: ['admin'], // 控制权限
      keepAlive: true, // 启用缓存
    },
  },
  {
    path: '/message',
    component: () => import(/* webpackChunkName: "message" */'@/views/message/index.vue'),
    meta: {
      title: '消息页',
      icon: 'mdi:message-text',
      roles: ['admin', 'other'], // 控制权限
      keepAlive: true, // 启用缓存
    },
  },
]

export {
  accessRoutes,
  HOME_ROUTE_PATH,
  ignoreAccessRoutes,
  LOGIN_ROUTE_PATH,
  notFoundRoute,
  ROOT_ROUTE_NAME,
  rootRoute,
}
