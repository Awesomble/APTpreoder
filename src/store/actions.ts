import { ActionContext } from 'vuex'
import { State, SurportFamilyYMD } from './state'
import {
  SET_HEAD_TITLE,
  SET_SURPORT_TYPE,
  SET_SURPORT_FAMILY_YMD,
  SET_SURPORT_FAMILY,
  SET_SURPORT_INCOME,
  SET_SURPORT_AREA, SET_SURPORT_AREA_YMD,
  SET_SURPORT_HOMELESS_YMD, SET_SURPORT_BANK, SET_SURPORT_WEDDING_YMD, SET_NAVI,
} from './types'

export default {
  setNavi({ commit }: ActionContext<State, State>, payload: boolean) {
    commit(SET_NAVI, payload)
  },
  setHeadTitle({ commit }: ActionContext<State, State>, payload: string) {
    commit(SET_HEAD_TITLE, payload)
  },
  setSurportType({ commit }: ActionContext<State, State>, payload: string) {
    commit(SET_SURPORT_TYPE, payload)
  },
  setSurportFamily({ commit }: ActionContext<State, State>, payload: string) {
    commit(SET_SURPORT_FAMILY, payload)
  },
  setSurportFamilyYMD({ commit }: ActionContext<State, State>, payload: SurportFamilyYMD) {
    commit(SET_SURPORT_FAMILY_YMD, payload)
  },
  setSurportWeddingYMD({ commit }: ActionContext<State, State>, payload: string) {
    commit(SET_SURPORT_WEDDING_YMD, payload)
  },
  setSurportArea({ commit }: ActionContext<State, State>, payload: string) {
    commit(SET_SURPORT_AREA, payload)
  },
  setSurportAreaYMD({ commit }: ActionContext<State, State>, payload: string) {
    commit(SET_SURPORT_AREA_YMD, payload)
  },
  setSurportHomeLessYMD({ commit }: ActionContext<State, State>, payload: string) {
    commit(SET_SURPORT_HOMELESS_YMD, payload)
  },
  setSurportBank({ commit }: ActionContext<State, State>, payload: string) {
    commit(SET_SURPORT_BANK, payload)
  },
  setSurportIncome({ commit }: ActionContext<State, State>, payload: object) {
    commit(SET_SURPORT_INCOME, payload)
  },
}
