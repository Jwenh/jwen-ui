import DefaultTheme from 'vitepress/theme'
import JwenUI from '../../../src/components/entry'
export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.use(JwenUI)
  }
}
