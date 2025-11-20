import { createInstance, type ModuleFederation } from '@module-federation/enhanced/runtime'
import type { InjectionKey, Plugin } from 'vue'

const remotes = [
  {
    name: 'mfeAngular',
    entry: 'http://localhost:4200/remoteEntry.js',
    type: 'module',
  },
]

export const REMOTE_LOADER_KEY: InjectionKey<ModuleFederation> = Symbol('REMOTE_LOADER_KEY')

export const remoteLoaderPlugin: Plugin = {
  install(app) {
    const instance = createInstance({
      name: 'mfeVue',
      remotes,
    })

    app.provide(REMOTE_LOADER_KEY, instance)
  },
}
