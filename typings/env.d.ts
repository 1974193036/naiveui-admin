/// <reference types="@rsbuild/core/types" />

interface ImportMetaEnv {
  readonly VUE_APP_PORT: string
  readonly VUE_APP_BASE_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
