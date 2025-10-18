<script setup lang='ts'>
import Fa6SolidAnglesLeft from '~icons/fa6-solid/angles-left'
import Fa6SolidAnglesRight from '~icons/fa6-solid/angles-right'

const { collapsed } = storeToRefs(useLayoutStore())
</script>

<template>
  <n-button
    size="small"
    secondary
    @click="collapsed = !collapsed"
  >
    <template #icon>
      <n-icon :size="14">
        <fa6-solid-angles-right v-if="collapsed" />
        <fa6-solid-angles-left v-else />
      </n-icon>
    </template>
  </n-button>
</template>
