import type { RouteRecordRaw } from 'vue-router'
import { defineStore } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import { HOME_ROUTE_PATH, LOGIN_ROUTE_PATH } from '@/router/routes'
import { getUserInfo, removeUserInfo, setUserInfo } from '@/utils/auth'

export interface UserInfo {
  name: string
  phone: string
  roles: string[]
  token: string
}

interface UserLoginPayload {
  username: string
  password: string
  [x: string]: any
}

export const useUserStore = defineStore('user', () => {
  const route = useRoute()
  const router = useRouter()
  const loading = ref(false)
  const routes = shallowRef<RouteRecordRaw[]>([]) // 当前角色拥有的路由，要根据此数据生成菜单

  const u = getUserInfo()!
  const user = shallowRef<UserInfo>({
    name: u.name ?? '',
    phone: u.phone ?? '',
    roles: u.roles ?? [],
    token: u.token ?? '',
  })

  async function login(_payload: UserLoginPayload) {
    try {
      loading.value = true
      // 这里先模拟调用登录接口
      const res: { data: UserInfo } = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data: {
              name: '张三',
              phone: '13333333333',
              roles: ['admin'],
              token: '123456',
            },
          })
        }, 1000)
      })

      user.value = {
        ...user.value,
        ...res.data,
      }
      setUserInfo(user.value)

      const redirect = route.query.redirect as string ?? HOME_ROUTE_PATH
      router.push(redirect)
      return user.value
    }
    finally {
      loading.value = false
    }
  }

  function logout() {
    user.value = {
      name: '',
      phone: '',
      roles: [],
      token: '',
    }
    removeUserInfo()
  }

  function logoutWithQueryRedirect(redirect?: string) {
    logout()
    return router.push({
      path: LOGIN_ROUTE_PATH,
      query: {
        redirect: redirect ?? route.fullPath,
      },
    })
  }

  return {
    login,
    logout,
    loginLoading: loading,
    logoutWithQueryRedirect,
    user,
    routes,
  }
})
