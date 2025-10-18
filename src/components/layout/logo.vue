<script setup lang='tsx'>
import type { ProLayoutMode } from 'pro-naive-ui'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import logo from '@/assets/svg/logo.svg'
import setting from '@/settings/projectSetting'

const title = setting.app.title
const {
  mode,
  mobile,
  collapsed,
} = storeToRefs(useLayoutStore())

const enablePaddingLeft = computed(() => {
  if (mobile.value) {
    return true
  }
  const layoutMode = mode.value as ProLayoutMode

  // 目前只有 sidebar
  return layoutMode === 'horizontal'
    || layoutMode === 'sidebar'
    || layoutMode === 'mixed-sidebar'
    || (layoutMode === 'vertical' && !collapsed.value)
})

const showAppTitle = computed(() => {
  if (mobile.value) {
    return false
  }
  const layoutMode = mode.value as ProLayoutMode

  // 目前只有 sidebar
  return layoutMode === 'sidebar'
    || layoutMode === 'horizontal'
    || layoutMode === 'mixed-sidebar'
    || (layoutMode === 'vertical' && !collapsed.value)
})
</script>

<template>
  <a
    href="javascript: void 0;"
    class="h-full flex items-center gap-12px"
    :class="{
      'pl-12px': enablePaddingLeft,
      'justify-center': !enablePaddingLeft,
    }"
  >
    <img
      :src="logo"
      class="size-32px truncate"
    >
    <h1
      v-show="showAppTitle"
      class="truncate text-18px"
    >{{ title }}</h1>
  </a>
</template>
