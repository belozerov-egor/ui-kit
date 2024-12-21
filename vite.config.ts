import { resolve } from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

import { dependencies, devDependencies } from './package.json'

export default defineConfig({
  build: {
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      formats: ['es'],
      name: 'new-ui-kit-lib',
    },
    rollupOptions: {
      external: ['jsx-runtime.js', ...Object.keys(dependencies), ...Object.keys(devDependencies)],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
    target: 'esnext',
  },
  css: {
    modules: {
      generateScopedName: '[name]_[local]_[hash:base64:5]',
      scopeBehaviour: 'local',
    },
  },
  plugins: [react(), svgr()],
})
