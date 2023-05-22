import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import VueI18nPlugin from '../../src/index'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Inspect(), vue(), VueI18nPlugin()],
})
