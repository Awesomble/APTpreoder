import dayjs from 'dayjs'
import { State } from './state'

export default {
  FamilyCnt(state: State) : number {
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
    console.log('전체가족수 : ', cnt)
    return cnt
  },
  familyChildrenCnt(state: State) : number {
    const f = state.surportFamily.split(' ')
    console.log('아이들수 : ', Number(f[2]))
    return Number(f[2])
  },
  familyChildrenYMD(state: State) : dayjs.ConfigType[] {
    const a : dayjs.ConfigType[] = []
    if (state.surportFamilyYMD.children1) a.push(dayjs(state.surportFamilyYMD.children1))
    if (state.surportFamilyYMD.children2) a.push(dayjs(state.surportFamilyYMD.children2))
    if (state.surportFamilyYMD.children3) a.push(dayjs(state.surportFamilyYMD.children3))
    if (state.surportFamilyYMD.children4) a.push(dayjs(state.surportFamilyYMD.children4))
    if (state.surportFamilyYMD.children5) a.push(dayjs(state.surportFamilyYMD.children5))
    console.log('아이들YMD : ', a)
    return a
  },
  surportType(state: State) : string {
    if (state.surportType === '0') return '신혼부부·한부모'
    if (state.surportType === '1') return '다자녀가구'
    if (state.surportType === '2') return '생애최초'
    if (state.surportType === '3') return '노부모부양'
    if (state.surportType === '4') return '일반공급'
    return ''
  },
  myAverage(state: State, getters: any) : number {
    let average = 0
    if (state.surportIncomeMy || state.surportIncomeSpouse) {
      const C = Number(state.surportIncomeMy) + Number(state.surportIncomeSpouse)
      if (C <= state.average[0][getters.FamilyCnt]) average = 50
      else if (C > state.average[0][getters.FamilyCnt]
          && C <= state.average[1][getters.FamilyCnt]) average = 60
      else if (C > state.average[1][getters.FamilyCnt]
          && C <= state.average[2][getters.FamilyCnt]) average = 70
      else if (C > state.average[2][getters.FamilyCnt]
          && C <= state.average[3][getters.FamilyCnt]) average = 80
      else if (C > state.average[3][getters.FamilyCnt]
          && C <= state.average[4][getters.FamilyCnt]) average = 90
      else if (C > state.average[4][getters.FamilyCnt]
          && C <= state.average[5][getters.FamilyCnt]) average = 100
      else if (C > state.average[5][getters.FamilyCnt]
          && C <= state.average[6][getters.FamilyCnt]) average = 110
      else if (C > state.average[6][getters.FamilyCnt]
          && C <= state.average[7][getters.FamilyCnt]) average = 120
      else if (C > state.average[7][getters.FamilyCnt]
          && C <= state.average[8][getters.FamilyCnt]) average = 130
      else if (C > state.average[8][getters.FamilyCnt]
          && C <= state.average[9][getters.FamilyCnt]) average = 140
      else if (C > state.average[9][getters.FamilyCnt]
          && C <= state.average[10][getters.FamilyCnt]) average = 150
      else if (C > state.average[10][getters.FamilyCnt]
          && C <= state.average[11][getters.FamilyCnt]) average = 160
      else if (C > state.average[11][getters.FamilyCnt]) average = 170
      console.log('소득계산 : ', `소득(${C.toLocaleString()})`, `가족수(${getters.FamilyCnt})`)
    }
    console.log('전녁도근로자 평균대비 : ', average)
    return average
  },
}
