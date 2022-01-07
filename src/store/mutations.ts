import { State, SurportFamilyYMD } from './state'
import {
  SET_SURPORT_FAMILY,
  SET_SURPORT_INCOME,
  SET_SURPORT_TYPE,
  SET_SURPORT_FAMILY_YMD,
  SET_SURPORT_AREA,
  SET_SURPORT_AREA_YMD,
  SET_SURPORT_HOMELESS_YMD,
  SET_SURPORT_BANK,
  SET_SURPORT_WEDDING_YMD,
  SET_NAVI,
} from './types'

export default {
  [SET_NAVI](state: State, payload: boolean) {
    console.log(payload)
    state.navi = payload
  },
  [SET_SURPORT_TYPE](state: State, payload: string) {
    localStorage.surportType = payload
    state.surportType = payload
  },
  [SET_SURPORT_WEDDING_YMD](state: State, payload: string) {
    localStorage.surportWeddingYMD = payload
    state.surportWeddingYMD = payload
  },
  [SET_SURPORT_FAMILY_YMD](state: State, payload: SurportFamilyYMD) {
    localStorage.surportFamilyYMD = JSON.stringify(payload)
    state.surportFamilyYMD = payload
  },
  [SET_SURPORT_FAMILY](state: State, payload: string) {
    localStorage.surportFamily = payload
    state.surportFamily = payload
  },
  [SET_SURPORT_AREA](state: State, payload: string) {
    localStorage.surportArea = payload
    state.surportArea = payload
  },
  [SET_SURPORT_AREA_YMD](state: State, payload: string) {
    localStorage.surportAreaYMD = payload
    state.surportAreaYMD = payload
  },
  [SET_SURPORT_HOMELESS_YMD](state: State, payload: string) {
    localStorage.surportHomeLessYMD = payload
    state.surportHomeLessYMD = payload
  },
  [SET_SURPORT_BANK](state: State, payload: string) {
    localStorage.surportBank = payload
    state.surportBank = payload
  },
  [SET_SURPORT_INCOME](state: State, payload: { key: string, value: number }) {
    if (payload.key === 'my') {
      localStorage.surportIncomeMy = payload.value
      state.surportIncomeMy = payload.value
    } else {
      localStorage.surportIncomeSpouse = payload.value
      state.surportIncomeSpouse = payload.value
    }
  },
}
