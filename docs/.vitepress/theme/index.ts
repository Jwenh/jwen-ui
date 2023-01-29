import DefaultTheme from 'vitepress/theme'
import JwenUI from '../../../src/components/entry'
import '../../../src/style/index.css'
import 'vite-plugin-vuedoc/style.css'
export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.use(JwenUI)
  }
}
