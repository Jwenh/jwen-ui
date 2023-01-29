import {defineConfig} from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vitePluginVuedoc from 'vite-plugin-vuedoc'
export default defineConfig({
    plugins:[vueJsx(),vitePluginVuedoc({
        highlight: {
            theme: 'one-dark'
        }
    })]
})