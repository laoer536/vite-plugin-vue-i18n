import { createUnplugin } from 'unplugin'
import type { Options } from './types'
import { resolveOptions } from './options'

const unplugin = createUnplugin<Options | undefined>((options = {}) => {
  const resolved = resolveOptions(options)
  return {
    name: 'vite-plugin-vue-i18n',
    // transformInclude(id) {
    //     return id.endsWith('.vue')
    // },
    // just like rollup transform
    // transform(code) {
    //     return code.replace(/<template>/, '<template><div>Injected</div>')
    // },
  }
})

export * from './types'

export default unplugin.vite
