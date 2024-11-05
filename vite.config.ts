import { resolve } from 'path'

import { defineConfig } from 'vite'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

import { dependencies, devDependencies, peerDependencies } from './package.json'
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
      external: [
        ...Object.keys(peerDependencies),
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
        'react/jsx-runtime',
      ],
    },
    target: 'esnext',
  },
  css: {
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:5]',
      scopeBehaviour: 'local',
    },
  },
  plugins: [libInjectCss()],
})
