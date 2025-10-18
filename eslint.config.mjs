import antfu from '@antfu/eslint-config'

export default antfu(
  {
    vue: true,
    typescript: true,

    // enable UnoCSS support
    // https://unocss.dev/integrations/vscode
    unocss: true,

    formatters: {
      css: true,
    },
  },
  {
    rules: {
      'no-console': 'off',
      'node/prefer-global/process': 'off',
      'vue/component-name-in-template-casing': ['error', 'kebab-case', {
        registeredComponentsOnly: false,
      }],
    },
  },
  {
    ignores: ['.github/**', 'scripts/**', 'packages/**'],
  },
)
