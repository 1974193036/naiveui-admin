import type { UserInfo } from '@/store/user'

const User_Key = 'EXTC_USER'

export function getUserInfo() {
  try {
    const userInfo = JSON.parse(localStorage.getItem(User_Key) || '{}') as UserInfo
    return userInfo
  }
  catch (e) {
    console.error(e)
    return null
  }
}

export function setUserInfo(data: UserInfo) {
  return localStorage.setItem(User_Key, JSON.stringify(data))
}

export function removeUserInfo() {
  return localStorage.removeItem(User_Key)
}

// export function getToken() {
//   const userInfo = getUserInfo()
//   if (userInfo) {
//     return userInfo.token
//   }

//   return ''
// }
