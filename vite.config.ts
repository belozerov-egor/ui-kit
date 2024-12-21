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
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      formats: ['es'],
    },
    rollupOptions: {
      external: ['jsx-runtime.js', ...Object.keys(dependencies), ...Object.keys(devDependencies)],
      input: {
        index: resolve(__dirname, 'src/index.ts'),
      },
      output: {
        assetFileNames: assetInfo => {
          const { name } = assetInfo

          if (name && name.endsWith('.css')) {
            return `css/[name][extname]`
          }

          return 'assets/[name][extname]'
        },
        dir: 'dist',
        entryFileNames: ({ facadeModuleId }) => {
          if (!facadeModuleId) {
            return '[name].js'
          }
          const moduleName = facadeModuleId.split('/src/')[1]

          if (!moduleName) {
            return '[name].js'
          }

          return moduleName.replace('.tsx', '.js').replace('.ts', '.js')
        },
        exports: 'named',
        format: 'es',
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
