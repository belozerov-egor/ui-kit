import { resolve } from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import svgr from 'vite-plugin-svgr'

import { dependencies, devDependencies } from './package.json'
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      // the proper extensions will be added
      fileName: 'index',
      formats: ['es'],
      name: 'new-ui-kit-lib',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['jsx-runtime.js', ...Object.keys(dependencies), ...Object.keys(devDependencies)],
    },
    target: 'esnext',
  },
  css: {
    devSourcemap: true,
    modules: {
      generateScopedName: '[name]_[local]_[hash:base64:5]',
    },
  },
  plugins: [libInjectCss(), react(), svgr()],
})
