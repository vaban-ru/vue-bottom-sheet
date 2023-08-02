import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      cleanVueFileName: true
    })
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'VueBottomSheet',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format: string) => `vue-bottom-sheet.${format}.js`
    },
    rollupOptions: {
      external: ['vue', 'hammerjs'],
      output: {
        globals: {
          vue: 'Vue'
        },
        exports: 'named'
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
