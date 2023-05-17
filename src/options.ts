import { getPackageInfo } from 'local-pkg'
import type { Options, ResolvedOptions } from './types'
export async function resolveOptions(options: Options): Promise<ResolvedOptions> {
  const { name = 'test' } = options

  /** todo something to set result config **/

  return {
    name,
    start: true,
  }
}

async function getVueVersion() {
  try {
    const result = await getPackageInfo('vue')
    if (!result) return null
    return result.version.startsWith('2.') ? 'vue2' : 'vue3'
  } catch {
    return null
  }
}
