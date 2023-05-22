import { createUnplugin } from 'unplugin'
import type { Options } from './types'
import { resolveOptions } from './options'
import { generateInternationalizedFiles } from './core'

const unplugin = createUnplugin<Options | undefined>((options = {}) => {
  const resolved = resolveOptions(options)
  console.log(resolved)
  return {
    name: 'vite-plugin-vue-i18n',
    enforce: 'pre',
    transformInclude(id) {
      console.log(id)
      return id.endsWith('.vue')
    },
    // just like rollup transform
    transform(code, id) {
      console.log('ssssss', id)
      return code.replace(/[\u4e00-\u9fa5]+/g, (str) => {
        console.log(str)
        generateInternationalizedFiles(id, [str], ['zh'])
        return str
      })
    },
  }
})

export * from './types'

export default unplugin.vite
