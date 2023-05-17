export interface Options {
  name?: string
}

export interface ResolvedOptions extends Required<Options> {
  start: boolean
}
