import { defineConfig, loadEnv } from '@rsbuild/core'
import { pluginBabel } from '@rsbuild/plugin-babel'
import { pluginSass } from '@rsbuild/plugin-sass'
import { pluginVue } from '@rsbuild/plugin-vue'
import { pluginVueJsx } from '@rsbuild/plugin-vue-jsx'
import UnoCSS from '@unocss/postcss'
import { ProNaiveUIResolver } from 'pro-naive-ui-resolver'
import AutoImport from 'unplugin-auto-import/rspack'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/rspack'
import setting from './src/settings/projectSetting'

const { publicVars } = loadEnv({ prefixes: ['VUE_APP_'] })
const isDev = process.env.NODE_ENV === 'development'

export default defineConfig({
  resolve: {
    alias: {
      '@': './src',
      '@pro/router': './packages/router/src/index.ts',
    },
  },
  performance: {
    removeMomentLocale: true,
    bundleAnalyze: process.env.BUNDLE_ANALYZE
      ? { analyzerMode: 'server', openAnalyzer: true }
      : undefined,
  },
  plugins: [
    pluginVue(),
    pluginVueJsx(),
    pluginBabel(),
    pluginSass(),
  ],
  tools: {
    postcss: () => {
      return {
        postcssOptions: {
          plugins: [UnoCSS],
        },
      }
    },
    rspack: {
      plugins: [
        AutoImport({
          imports: [
            'vue',
            'vue-router',
            'pinia',
          ],
          dirs: ['src/store'],
          dts: 'typings/auto-imports.d.ts',
        }),
        Components({
          resolvers: [
            NaiveUiResolver(),
            ProNaiveUIResolver(),
          ],
          dirs: [],
          dts: 'typings/components.d.ts',
        }),
      ],
    },
  },
  source: {
    define: {
      ...publicVars,
      __DEV__: isDev,
    },
    entry: {
      index: './src/main.js',
    },
  },
  html: {
    template: './public/index.html',
    templateParameters: {
      title: setting.app.title,
    },
  },
  output: {
    assetPrefix: '/', // 类似vue-cli中的 publicPath
    polyfill: 'usage',
    sourceMap: {
      js: isDev ? 'cheap-module-source-map' : false,
    },
    legalComments: 'none',
  },
  server: {
    port: Number.parseInt(import.meta.env.VUE_APP_PORT, 10) || 3000,
  },
})
