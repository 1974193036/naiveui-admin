<script setup lang="tsx">
import type { DropdownMixedOption } from 'naive-ui/es/dropdown/src/interface'
import { NIcon, useDialog } from 'naive-ui'
import AkarIconsGithubFill from '~icons/akar-icons/github-fill'
import FormkitFiledoc from '~icons/formkit/filedoc'
import MajesticonsUserLine from '~icons/majesticons/user-line'
import MaterialSymbolsLogout from '~icons/material-symbols/logout'

const dialog = useDialog()
const userStore = useUserStore()

const { user } = storeToRefs(userStore)

const options = computed<DropdownMixedOption[]>(() => [
  {
    label: '文档',
    key: 'doc',
    icon: () => {
      return (
        <NIcon>
          <FormkitFiledoc />
        </NIcon>
      )
    },
  },
  {
    label: 'Github',
    key: 'github',
    icon: () => {
      return (
        <NIcon>
          <AkarIconsGithubFill />
        </NIcon>
      )
    },
  },
  {
    type: 'divider',
  },
  {
    label: '退出登录',
    key: 'logout',
    icon: () => {
      return (
        <NIcon>
          <MaterialSymbolsLogout />
        </NIcon>
      )
    },
  },
])

function handleSelect(key: string) {
  if (key === 'github') {
    window.open('https://github.com/1974193036/naiveui-admin', '_blank')
    return
  }
  if (key === 'logout') {
    dialog.info({
      title: '提示',
      content: '确认退出登录吗？',
      negativeText: '取消',
      positiveText: '确认',
      onPositiveClick: () => {
        userStore.logoutWithQueryRedirect()
      },
    })
  }
}
</script>

<template>
  <n-dropdown
    trigger="hover"
    :options="options"
    size="large"
    placement="bottom-end"
    class="min-w-160px"
    @select="handleSelect"
  >
    <n-button quaternary>
      <template #icon>
        <n-icon>
          <majesticons-user-line />
        </n-icon>
      </template>
      {{ user.name }}
    </n-button>
  </n-dropdown>
</template>
