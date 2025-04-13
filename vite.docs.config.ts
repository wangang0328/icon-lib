import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
      }
    })
  ],
  root: 'src/docs', // 指定文档应用的根目录
  build: {
    outDir: '../../dist-docs', // 文档输出目录
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true
  }
})