import presetUno from '@unocss/preset-wind3'
import { defineConfig, presetAttributify, presetTypography, transformerDirectives, transformerVariantGroup } from 'unocss'
import presetChinese from 'unocss-preset-chinese'
import presetEase from 'unocss-preset-ease'
import thinThemeColors from './src/utils/unoTheme'

export default defineConfig({
  content: {
    filesystem: ['./src/**/*.{html,js,ts,jsx,tsx,vue}'],
  },
  presets: [presetUno(), presetAttributify(), presetChinese(), presetEase(), presetTypography()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    colors: {
      ...thinThemeColors,
    },
  },
  rules: [
    ['flex-center', {
      'display': 'flex',
      'justify-content': 'center',
      'align-items': 'center',
    }],
  ],
})
