<script setup lang="ts">
import type { ProLayoutMode } from 'pro-naive-ui'
import { isNil } from 'lodash-es'
import { useLayoutMenu } from 'pro-naive-ui'
import { ProMenu } from '../menu'
import CollapseSidebarButton from './collapse-sidebar-button.vue'
import Content from './content.vue'
import Logo from './logo.vue'
import MobileSidebarDrawer from './mobile-sidebar-drawer.vue'
import NavLeft from './nav-left.vue'
import NavRight from './nav-right.vue'

const route = useRoute()
const router = useRouter()

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

const {
  layout,
  fullKeys,
  activeKey,
  verticalLayout,
} = useLayoutMenu({
  mode,
  menus: computed(() => router.buildMenus()),
})

const showSidebarCollapseButton = computed(() => {
  const layoutMode = mode.value as ProLayoutMode
  return layoutMode === 'vertical'
    || layoutMode === 'sidebar'
    || layoutMode === 'mixed-sidebar'
})

async function pushTo(path: string) {
  if (route.path === path) {
    return
  }
  const failure = await router.push(path)
  if (failure) {
    // 跳转失败回退
    activeKey.value = route.path
  }
}

watch(() => route.path, (path) => {
  if (activeKey.value === path) {
    return
  }
  const key = findAvailableMenuKey()
  if (isNil(key) && __DEV__) {
    console.warn('This looks like a bug, please open an issue to report this problem')
    return
  }
  activeKey.value = key!
}, { immediate: true })

function findAvailableMenuKey() {
  const keys = fullKeys.value
  for (let i = route.matched.length - 1; i >= 0; i--) {
    const item = route.matched[i]!
    if (keys.includes(item.path)) {
      return item.path
    }
  }
}
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
    :show-tabbar="false"
    :sidebar-width="sidebarWidth"
    :show-sidebar="showSidebar"
    :show-sidebar-extra="showSidebar"
    nav-class="bg-#fff"
    content-class="pro-layout__content--embedded p-16px bg-action"
    :sidebar-collapsed-width="sidebarCollapsedWidth"
  >
    <template #logo>
      <logo />
    </template>
    <template #nav-left>
      <nav-left />
      <mobile-sidebar-drawer>
        <n-scrollbar class="flex-[1_0_0]">
          <pro-menu
            v-bind="verticalLayout.verticalMenuProps"
            :indent="18"
            :collapsed-width="sidebarCollapsedWidth"
            :options="verticalLayout.verticalMenuProps.options"
            @update:value="pushTo"
          />
        </n-scrollbar>
      </mobile-sidebar-drawer>
    </template>
    <template #nav-right>
      <nav-right />
    </template>
    <template #sidebar>
      <div class="h-full flex flex-col">
        <n-scrollbar class="flex-[1_0_0]">
          <pro-menu
            v-bind="layout.verticalMenuProps"
            :indent="18"
            :collapsed-width="sidebarCollapsedWidth"
            :options="layout.verticalMenuProps.options"
            @update:value="pushTo"
          />
        </n-scrollbar>
        <div
          v-if="showSidebarCollapseButton"
          class="flex p-8px"
        >
          <collapse-sidebar-button />
        </div>
      </div>
    </template>
    <template #default>
      <content />
    </template>
  </pro-layout>
</template>
