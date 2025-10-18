<script setup lang="ts">
// import { useThemeVars } from 'naive-ui'

// const vars = useThemeVars()

// const route = useRoute()
// const router = useRouter()

// console.log(vars)
// import { ProLayout } from 'pro-naive-ui'
import Logo from './logo.vue'

const {
  mode,
  mobile,
  showNav,
  showLogo,
  navFixed,
  navHeight,
  collapsed,
  showSidebar,
  sidebarWidth,
  sidebarCollapsedWidth,
} = storeToRefs(useLayoutStore())
</script>

<template>
  <pro-layout
    v-model:collapsed="collapsed"
    :mode="mode"
    :is-mobile="mobile"
    :show-nav="showNav"
    :show-logo="showLogo"
    :nav-fixed="navFixed"
    :nav-height="navHeight"
    :show-footer="false"
    :sidebar-width="sidebarWidth"
    :show-sidebar="showSidebar"
    :show-sidebar-extra="showSidebar"
    content-class="pro-layout__content--embedded p-16px bg-action"
    :sidebar-collapsed-width="sidebarCollapsedWidth"
  >
    <template #logo>
      <logo />
    </template>
  </pro-layout>
</template>
