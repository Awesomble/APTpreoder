import { Module } from 'vuex'
import CommonTypes from './types'
import RootStateTypes from '../../types'

// Create a new store Modules.
const commonModule: Module<CommonTypes, RootStateTypes> = {
  namespaced: true,
  state: {
    name: '',
    count: 1
  },
  mutations: {
    DOUBLE_COUNT(state: CommonTypes) {
      state.count *= 2
    }
  },
  actions: {}
}

export default commonModule
