<script setup lang='ts'>
import type { ProLayoutMode } from 'pro-naive-ui'
import LineMdMenu from '~icons/line-md/menu'

const {
  mode,
  mobile,
  showSidebar,
  showMobileSidebarDrawer,
} = storeToRefs(useLayoutStore())

const showSidebarHiddenButton = computed(() => {
  const layoutMode = mode.value as ProLayoutMode
  if (mobile.value) {
    return true
  }
  return layoutMode !== 'horizontal' && layoutMode !== 'sidebar'
})

function toggleSidebar() {
  if (mobile.value) {
    showMobileSidebarDrawer.value = !showMobileSidebarDrawer.value
    return
  }
  showSidebar.value = !showSidebar.value
}
</script>

<template>
  <div class="h-full flex items-center gap-4px pl-8px">
    <n-button
      v-if="showSidebarHiddenButton"
      quaternary
      size="small"
      @click="toggleSidebar"
    >
      <template #icon>
        <line-md-menu />
      </template>
    </n-button>
  </div>
</template>
