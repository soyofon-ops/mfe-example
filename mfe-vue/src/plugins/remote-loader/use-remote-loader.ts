import { inject } from 'vue'
import { REMOTE_LOADER_KEY } from '.'

export const useRemoteLoader = () => {
  const instance = inject(REMOTE_LOADER_KEY)

  return {
    instance,
  }
}
