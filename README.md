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
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## Learn more

基于 `rsbuild` 的打包工具

- [Rsbuild documentation](https://rsbuild.rs) - explore Rsbuild features and APIs.
- [Rsbuild GitHub repository](https://github.com/web-infra-dev/rsbuild) - your feedback and contributions are welcome!

## 图标
[@iconify/vue](https://icon-sets.iconify.design/) -- 使用起来最方便，但是是在线的图标库，不适合私有化部署

[@iconify/json](https://www.npmjs.com/package/@iconify/json) -- 在`@iconify/vue`的基础上，添加离线加载方案，
并通过`unplugin-icons`自动按需加载，按需打包

[图标查找](https://icon-sets.iconify.design/)

使用步骤：
1. 找到自己喜欢的图标
2. 选择 components
3. 选择 unplugin Icons
4. 复制代码

使用示例：
```vue
<script setup lang="ts">
import LineMdMenu from '~icons/line-md/menu'
</script>

<template>
  <line-md-menu />
</template>
```
