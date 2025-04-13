import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr({
    svgrOptions: {
      icon: true,
    }
  }), dts({
    // 生成类型声明入口
    insertTypesEntry: true,
    rollupTypes: true,
    include: ['src'],
    // 确保生成类型文件
    copyDtsFiles: false,
    // 指定 tsconfig
    tsconfigPath: './tsconfig.app.json',
    outDir: 'dist',
    staticImport: true,
    compilerOptions: {
      preserveSymlinks: false,
    },
  })],
  build: {
    lib: {
      entry: 'src/index.ts',
      // 打包成umd格式后的全局变量名
      name: 'IconLibrary',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', /node_modules/, 'react/jsx-runtime', /^react\/.*/],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsx'
        },
        // 保持模块结构
        preserveModules: true,
        // 设置模块的根目录
        preserveModulesRoot: 'src',
        // 定义输出文件名
        entryFileNames: '[name].js',
        inlineDynamicImports: false,
        // 确保导入路径不被修改
        paths: {
          react: 'react',
          'react-dom': 'react-dom',
          'react/jsx-runtime': 'react/jsx-runtime'
        },
      },
    },
  }
})
