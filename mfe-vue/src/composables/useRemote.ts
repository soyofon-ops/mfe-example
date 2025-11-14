import { createInstance } from '@module-federation/enhanced/runtime'

export const useRemote = () => {
  const instance = createInstance({
    name: 'mfe_vue',
    remotes: [
      {
        name: 'mfe_angular',
        entry: 'http://localhost:4200/remoteEntry.js',
        type: 'module',
      },
    ],
  })

  return instance
}
