import { State } from './state'

export default {
  familyCnt(state: State) : number {
    let cnt = 1
    const f = state.surportFamily.split(' ')
    if (f[0] === '0') cnt += 2
    else if (f[0] === '1' || f[0] === '2') cnt += 1
    if (f[1] === '0') cnt += 2 // 기혼
    else if (f[1] === '1') cnt += 1 // 한부모
    else if (f[1] === '2') cnt += 2 // 예비부부
    else if (f[1] === '3') cnt += 1 // 미혼
    if (f[2] === '1') cnt += 1 // 자녀1
    else if (f[2] === '2') cnt += 2 // 자녀2
    else if (f[2] === '3') cnt += 3 // 자녀3
    else if (f[2] === '4') cnt += 4 // 자녀3
    else if (f[2] === '5') cnt += 5 // 자녀3
    return cnt
  },
  myAverage(state: State, getters: any) : number {
    let average = 0
    if (state.surportIncomeMy) {
      const C = state.surportIncomeMy + state.surportIncomeSpouse
      if (C <= state.average[0][getters.familyCnt]) average = 50
      else if (C > state.average[0][getters.familyCnt] && C <= state.average[1][getters.familyCnt]) average = 60
      else if (C > state.average[1][getters.familyCnt] && C <= state.average[2][getters.familyCnt]) average = 70
      else if (C > state.average[2][getters.familyCnt] && C <= state.average[3][getters.familyCnt]) average = 80
      else if (C > state.average[3][getters.familyCnt] && C <= state.average[4][getters.familyCnt]) average = 90
      else if (C > state.average[4][getters.familyCnt] && C <= state.average[5][getters.familyCnt]) average = 100
      else if (C > state.average[5][getters.familyCnt] && C <= state.average[6][getters.familyCnt]) average = 110
      else if (C > state.average[6][getters.familyCnt] && C <= state.average[7][getters.familyCnt]) average = 120
      else if (C > state.average[7][getters.familyCnt] && C <= state.average[8][getters.familyCnt]) average = 130
      else if (C > state.average[8][getters.familyCnt] && C <= state.average[9][getters.familyCnt]) average = 140
      else if (C > state.average[9][getters.familyCnt] && C <= state.average[10][getters.familyCnt]) average = 150
      else if (C > state.average[10][getters.familyCnt]) average = 160
    }
    return average
  },
}
