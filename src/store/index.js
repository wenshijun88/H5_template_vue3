import { createStore, useStore as baseUseStore } from 'vuex'
import modules from './modules'
export const key = Symbol('vuex')
const store = createStore({
  modules,
})

export default store

export function useStore () {
  return baseUseStore(key)
}
