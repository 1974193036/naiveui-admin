import type { ProRouterPlugin } from '../plugin'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false });
export function progressPlugin(): ProRouterPlugin {
  return ({ router }) => {
    router.beforeEach(() => {
      NProgress.start()
    })

    router.afterEach(() => {
      NProgress.done()
    })

    router.onError(() => {
      NProgress.done()
    })
  }
}
