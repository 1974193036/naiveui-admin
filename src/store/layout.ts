import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { defineStore } from 'pinia'
import setting from '@/settings/projectSetting'

function useMobile() {
  const breakpoints = useBreakpoints(breakpointsTailwind)
  return computed(() => {
    // sm: 640px
    // md: 768px
    return breakpoints.between('sm', 'md').value || breakpoints.smallerOrEqual('sm').value
  })
}

export const useLayoutStore = defineStore('layout', () => {
  const mobile = useMobile()
  const showMobileSidebarDrawer = ref(false)
  const layout = reactive({ ...setting.layout })

  return {
    mobile,
    showMobileSidebarDrawer,
    ...toRefs(layout),
  }
})
