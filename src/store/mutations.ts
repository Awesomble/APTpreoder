import { State } from './state'
import {
  SET_SURPORT_FAMILY, SET_SURPORT_INCOME,
  SET_SURPORT_TYPE, SET_SURPORT_YYYY,
} from './types'

export default {
  [SET_SURPORT_TYPE](state: State, payload: string) {
    state.surportType = payload
  },
  [SET_SURPORT_YYYY](state: State, payload: object) {
    state.surportYYYY = payload
  },
  [SET_SURPORT_FAMILY](state: State, payload: string) {
    state.surportFamily = payload
  },
  [SET_SURPORT_INCOME](state: State, payload: { key: string, value: number }) {
    if (payload.key === 'my') state.surportIncomeMy = payload.value
    else state.surportIncomeSpouse = payload.value
  },
}
