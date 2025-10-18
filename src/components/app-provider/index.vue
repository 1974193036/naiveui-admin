<script setup lang='ts'>
import type { ProConfigProviderProps } from 'pro-naive-ui'
import { dateZhCN } from 'naive-ui'
import { zhCN } from 'pro-naive-ui'
import setting from '@/settings/projectSetting'

const { theme } = setting
const themeProps: ProConfigProviderProps = {
  theme: null,
  themeOverrides: {
    common: {
      borderRadius: '6px',
      primaryColor: theme.primaryColor,
      primaryColorHover: theme.primaryColorHover,
      primaryColorSuppl: theme.primaryColorSuppl,
      primaryColorPressed: theme.primaryColorPressed,
    },
    Tag: {
      borderRadius: '6px',
    },
  },
}

const { mobile } = storeToRefs(useLayoutStore())

const configProviderProps = computed<ProConfigProviderProps>(() => {
  return {
    abstract: true,
    inlineThemeDisabled: true,
    ...themeProps,
    propOverrides: {
      ProButton: {
        focusable: false,
      },
      ProDataTable: {
        size: 'small',
        flexHeight: !mobile.value,
        pagination: {
          pageSlot: mobile.value ? 6 : undefined,
        },
      },
      ProModalForm: {
        preset: 'card',
        labelPlacement: 'left',
        labelWidth: '100',
      },
    },
    locale: zhCN,
    dateLocale: dateZhCN,
  }
})
</script>

<template>
  <pro-config-provider v-bind="configProviderProps">
    <n-message-provider>
      <n-notification-provider>
        <n-dialog-provider>
          <slot />
        </n-dialog-provider>
      </n-notification-provider>
    </n-message-provider>
  </pro-config-provider>
</template>
