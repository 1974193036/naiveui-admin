<script setup lang="ts">
import CollapseSidebarButton from './collapse-sidebar-button.vue'
import Logo from './logo.vue'

const {
  collapsed,
  sidebarWidth,
  sidebarCollapsedWidth,
  showMobileSidebarDrawer,
} = storeToRefs(useLayoutStore())
</script>

<template>
  <n-drawer
    v-model:show="showMobileSidebarDrawer"
    :auto-focus="false"
    :width="collapsed ? sidebarCollapsedWidth : sidebarWidth"
    placement="left"
    class="mobile-sidebar-drawer transition-[width] duration-300 ease-[var(--n-bezier)]"
  >
    <n-drawer-content :native-scrollbar="false">
      <template #header>
        <logo using-mobile-sidebar-drawer />
      </template>
      <div class="h-full flex flex-col">
        <slot />
        <div class="flex justify-center p-8px">
          <collapse-sidebar-button />
        </div>
      </div>
    </n-drawer-content>
  </n-drawer>
</template>

<style scoped>
.mobile-sidebar-drawer {
  .n-drawer-content {
    :deep(.n-scrollbar-content) {
      height: 100%;
    }
    :deep(.n-drawer-header) {
      padding-left: 0;
      padding-right: 0;
    }
    :deep(.n-drawer-body-content-wrapper) {
      padding: 0;
    }
  }
}
</style>
