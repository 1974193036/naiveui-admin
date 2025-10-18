import defaultTheme from '../settings/defaultTheme'
import setting from '../settings/projectSetting'

const themeColors = {
  ...defaultTheme,
  ...setting.theme,
}

interface ThinThemeColors {
  [k: string]: string
}

type ThemeKey = keyof typeof themeColors

const thinThemeColors = Object.keys(themeColors).reduce((acc, cur) => {
  return ((acc[cur.replace('Color', '')] = themeColors[cur as ThemeKey]), acc)
}, {} as ThinThemeColors)

export default thinThemeColors
