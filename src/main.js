import { createApp } from 'vue'
import App from './app.vue'

if (window.__POWERED_BY_WUJIE__) {
  let instance
  window.__WUJIE_MOUNT = () => {
    instance = createApp(App)
    instance.mount("#app")
  }
  window.__WUJIE_UNMOUNT = () => {
    instance.unmount()
  }
  // 对vite兼容
  window.__WUJIE.mount()
} else {
  createApp(App).mount("#app")
}