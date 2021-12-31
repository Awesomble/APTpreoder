import { ActionContext } from 'vuex'
import { State } from './state'
import {
  SET_SURPORT_TYPE,
  SET_SURPORT_YYYY,
  SET_SURPORT_FAMILY,
  SET_SURPORT_INCOME,
} from './types'

export default {
  setSurportType({ commit }: ActionContext<State, State>, payload: string) {
    commit(SET_SURPORT_TYPE, payload)
  },
  setSurportYYYY({ commit }: ActionContext<State, State>, payload: string) {
    commit(SET_SURPORT_YYYY, payload)
  },
  setSurportFamily({ commit }: ActionContext<State, State>, payload: string) {
    commit(SET_SURPORT_FAMILY, payload)
  },
  setSurportIncome({ commit }: ActionContext<State, State>, payload: object) {
    commit(SET_SURPORT_INCOME, payload)
  },
}
