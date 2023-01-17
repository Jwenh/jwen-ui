import { defineConfig ,UserConfigExport} from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default defineConfig({
  // build:{
  //   rollupOptions:{
  //     // 确保外部化处理那些你不想打包进库的依赖
  //     external:['vue','vue-router'],
  //     output:{
  //       // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
  //       globals:{
  //         vue:'Vue'
  //       }
  //     }
  //   },
  //   // 代码压缩混淆
  //   minify:true, 
  //   lib:{
  //     entry:resolve(__dirname,'src/components/entry.ts'),
  //     name:'jwenUI',
  //     fileName:'jwen-ui',
  //     formats:['es','umd','iife']
  //   }
  // },
  plugins: [vue(),vueJsx()],
})
