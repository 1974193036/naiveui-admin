import type { ExtractPublicPropTypes } from 'vue'
import { menuProps } from 'naive-ui'

const extendProps = {
  /**
   * 当折叠后，菜单项的高度
   * @default 82
   */
  menuItemHeightWhenCollapsed: Number,
} as const

export const proMenuProps = {
  ...menuProps,
  ...extendProps,
} as const

export type ProMenuProps = ExtractPublicPropTypes<typeof proMenuProps>
