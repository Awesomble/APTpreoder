import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import RootStateTypes, { AllStateTypes } from './types'

import Common from './modules/Common'

export const store = createStore<RootStateTypes>({
  state: {
    text: ''
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    Common
  }
})

export const key: InjectionKey<Store<RootStateTypes>> = Symbol('vue-store')

export function useStore<T = AllStateTypes>() {
  return baseUseStore<T>(key)
}
