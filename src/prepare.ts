import type { App } from 'vue'
// import { create, ProDate, ProInput, ProSelect } from 'pro-naive-ui'
import { setupRouter } from '@/router'
import setting from '@/settings/projectSetting'
import { setupPinia } from '@/store'

export function prepareCreateApp() {
  setupAppLoading()
}

export async function prepareMount(app: App) {
  setupPinia(app)
  await setupRouter(app)
  setupComponents(app)
  // TODO: 增加自定义指令
  // setupDirective(app)
}

function setupComponents(_app: App) {
  // pro-naive-ui 中的 pro-search-form 支持按需加载组件，所以这里需要手动注册
  // app.use(create({
  //   components: [
  //     ProInput,
  //     ProSelect,
  //     ProDate,
  //   ],
  // }))
}

function setupAppLoading() {
  const title = setting.app.title
  const primaryColor = setting.theme.primaryColor

  const loadingHtml = `
      <style>
        .loading-container {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          top: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #f7fafc;
        }
        .spin {
          width: 50px;
          aspect-ratio: 1;
          --_c: no-repeat radial-gradient(farthest-side, ${primaryColor} 92%, #0000);
          background:
            var(--_c) top,
            var(--_c) left,
            var(--_c) right,
            var(--_c) bottom;
          background-size: 14px 14px;
          animation: spin 1s infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(180deg)
          }
        }
        .loading-title {
          font-size: 28px;
          font-weight: 600;
          margin-top: 24px;
        }
      </style>
    <div class="loading-container">
      <div class="spin"></div>
      <div class="loading-title">${title}</div>
    </div>
  `
  const app = document.querySelector('#app')
  if (app) {
    app.innerHTML = loadingHtml
  }
}
