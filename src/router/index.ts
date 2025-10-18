import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import {
  autoRedirectPlugin,
  createRouter,
  keepAlivePlugin,
  nestedRouteRenderPlugin,
  nMenuPlugin,
  progressPlugin,
  rbacAccessPlugin,
  transitionPlugin,
} from '@pro/router'
import { createWebHashHistory } from 'vue-router'
import { stateCleanupPlugin } from './plugins/state-cleanup-plugin'

import {
  accessRoutes,
  HOME_ROUTE_PATH,
  ignoreAccessRoutes,
  LOGIN_ROUTE_PATH,
  notFoundRoute,
  ROOT_ROUTE_NAME,
  rootRoute,
} from './routes'

export async function setupRouter(app: App) {
  const router = createRouter({
    history: createWebHashHistory(),
    routes: [
      rootRoute,
      ...ignoreAccessRoutes,
      notFoundRoute,
    ],
    plugins: [
      /**
       * 路由进度条插件
       */
      progressPlugin(),

      /**
       * 路由缓存插件
       */
      keepAlivePlugin(),

      /**
       * 路由过渡插件
       */
      transitionPlugin({
        // 统一配置所有路由动画 <'fade' | 'fade-down' | 'fade-slide' | 'fade-up' | 'none'>
        transitionName: () => 'fade-slide',
      }),

      /**
       * 自动重定向到目标路由插件
       */
      autoRedirectPlugin({
        homePath: () => HOME_ROUTE_PATH,
      }),

      /**
       * 权限插件
       */
      rbacAccessPlugin({
        service: async () => {
          const userStore = useUserStore()
          const { user } = storeToRefs(userStore)
          console.log('rbacAccessPlugin user =====> ', user)
          const baseInfo = {
            logined: !!user.value.token, // 是否已登录
            homePath: HOME_ROUTE_PATH, // 首页路径，登录后会跳转到此路径，默认为 '/home'，可在这里控制不同用户跳转不同的首页地址
            loginPath: LOGIN_ROUTE_PATH, // 登录路径，未登录会跳转到此路径
            parentNameForAddRoute: ROOT_ROUTE_NAME, // 添加路由时的父级路由名称，设置后使用 router.addRoute('Root',routes)，默认使用 router.addRoute(routes)
            onRoutesBuilt: (routes: RouteRecordRaw[]) => {
              // 路由构建完成后回调，routes 为最终的 vue-router 路由
              console.log('rbacAccessPlugin routes =====>', routes)
              userStore.routes = routes
            },
          }
          return {
            ...baseInfo,
            mode: 'frontend', // 本项目中使用前端权限控制
            routes: accessRoutes, // 会根据 roles 过滤路由
            roles: user.value.roles, // 当前登录的用户角色，如果为空，不过滤路由
          }
        },
      }),

      /**
       * 菜单插件，将数据转换成 n-menu 组件的菜单数据
       */
      nMenuPlugin({
        service: () => {
          const store = useUserStore()
          return {
            routes: store.routes,
          }
        },
      }),

      /**
       * 嵌套路由视图渲染插件
       */
      nestedRouteRenderPlugin(),

      /**
       * 状态清理插件
       */
      stateCleanupPlugin(),
    ],
  })

  app.use(router)
  await router.isReady()
}
