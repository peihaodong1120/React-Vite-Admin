import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// 引入node模块path
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    // 配置路径别名，@相当于src目录
    alias:{
      '@': path.resolve(__dirname, './src')
    }
  }
})
