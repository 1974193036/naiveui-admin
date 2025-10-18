# Rsbuild project

## Setup

Install the dependencies:

```bash
pnpm install
```

## Get started

```bash
pnpm dev
```

Build the app for production:

```bash
pnpm build:test # 测试环境
pnpm build:prod # 生产环境
```

Preview the production build locally:

```bash
pnpm preview
```

## 打包工具

基于 `rsbuild` 的打包工具

- 底层的打包工具由 webpack 替换为 Rspack，提供 5 ~ 10 倍的构建性能。

- Rsbuild 兼容大部分的 webpack 插件和所有 Rspack 插件

## rsbuild 更多介绍
- [Rsbuild documentation](https://rsbuild.rs) - explore Rsbuild features and APIs.
- [Rsbuild GitHub repository](https://github.com/web-infra-dev/rsbuild) - your feedback and contributions are welcome!

## 组件库

- [naive-ui](https://www.naiveui.com/)，底层组件库

- [pro-naive-ui](https://naive-ui.pro-components.cn)，基于 naive-ui 二次封装的，实现更强大的功能，也完全支持 naive-ui 的功能

## Layout布局

- 基于`pro-naive-ui`的 `pro-layout`快速实现

## 路由插件

- [路由插件](./packages/router/)
采用了一种创新的插件化架构设计，把复杂的功能拆分成一个个独立的"积木块"，每个积木块负责特定的功能，然后通过插件系统把它们组合起来

- [参考文档](https://docs-naive-ui-pro.pro-components.cn/router-plugins/intro.html)
感谢插件的作者

## 图标
- [@iconify/vue](https://www.npmjs.com/package/@iconify/vue) -- 使用起来最方便，但是是在线的图标库，不适合私有化部署

- [@iconify/json](https://www.npmjs.com/package/@iconify/json) -- 在`@iconify/vue`的基础上，添加离线加载方案，
并通过`unplugin-icons`自动按需加载，按需打包

- [图标查找](https://icon-sets.iconify.design/)

- 使用步骤：
  1. 找到自己喜欢的图标
  2. 选择 components
  3. 选择 unplugin Icons
  4. 复制代码

- 使用示例：
  ```vue
  <script setup lang="ts">
  import LineMdMenu from '~icons/line-md/menu'
  </script>

  <template>
    <line-md-menu />
  </template>
  ```
