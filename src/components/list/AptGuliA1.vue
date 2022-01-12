<script setup lang="ts">
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import dayjs from 'dayjs'
import {
  UnAdultCnt, InfantCnt, TransferDays, WeddingDays, YoungestDays,
} from '@/shared/utils'
import { SurportFamilyYMD } from '@/store/state'

const noticeDtSt = dayjs('2021-12-29').toISOString()
const noticeDt = dayjs(noticeDtSt)
const store = useStore()
const surportFamilyYMD = computed(() : SurportFamilyYMD => store.state.surportFamilyYMD)
const surportFamily = computed(() : number[] => store.state.surportFamily.split(' ').map((n: string | number) => +n))
const familyChildrenCnt = computed(() : number => store.getters.familyChildrenCnt)
const familyChildrenYMD = computed(() : dayjs.ConfigType[] => store.getters.familyChildrenYMD)
const surportHomeLessYMD = computed(() : number => Number(store.state.surportHomeLessYMD))
const myAverage = computed(() : number => Number(store.getters.myAverage))
const surportIncomeMy = computed(() : number => Number(store.state.surportIncomeMy))
const surportIncomeSpouse = computed(() : number => Number(store.state.surportIncomeSpouse))

const surportArea = computed(() : number[] => store.state.surportArea.split(' ').map((n: string | number) => +n))
const surportAreaYMD = computed(() : string => store.state.surportAreaYMD)
const surportBank = computed(() : number[] => store.state.surportBank.split(' ').map((n: string | number) => +n))
const score1 = ref<number>(0) // 신혼
const score2 = ref<number>(0) // 신혼
const score1First = ref<boolean>(false) // 신혼
const score1Area = ref<boolean>(false) // 신혼
const score2Area = ref<boolean>(false) // 신혼
const unAdultCnt : number = UnAdultCnt(surportFamilyYMD.value, noticeDt)
const infantCnt : number = InfantCnt(surportFamilyYMD.value, noticeDt)
const transferDays : number = TransferDays(surportAreaYMD.value, noticeDt)
const weddingDays : number = WeddingDays(surportAreaYMD.value, noticeDt)
const youngestDays : number = YoungestDays(familyChildrenYMD.value, noticeDtSt)

// ❤️신혼.한부모 우선공급
// +가구소득
if (surportIncomeMy.value && surportIncomeSpouse.value) {
  if (myAverage.value <= 80) score1.value += 3
  else if (myAverage.value <= 110) score1.value += 2
  else if (myAverage.value > 110) score1.value += 1
} else {
  if (myAverage.value <= 70) score1.value += 3
  else if (myAverage.value <= 100) score1.value += 2
  else if (myAverage.value > 100) score1.value += 1
}
// +해당시도거주기간
if (transferDays >= 730) score1.value += 3
else if (transferDays >= 365) score1.value += 2
else score1.value += 1
// +입주자저축 기입기간
if (surportBank.value[0] >= 24) score1.value += 3
else if (surportBank.value[0] >= 12) score1.value += 2
else if (surportBank.value[0] >= 6) score1.value += 1

// ❤️신혼.한부모 잔여공급
// +미성년자녀수
if (unAdultCnt >= 3) score2.value += 3
else if (unAdultCnt === 2) score2.value += 2
else if (unAdultCnt === 1) score2.value += 1
// +무주택기간
if (surportHomeLessYMD.value >= 2) score2.value += 3
else if (surportHomeLessYMD.value >= 1) score2.value += 2
else score2.value += 1
// +해당시도거주기간
if (transferDays >= 750) score2.value += 3
else if (transferDays >= 365) score2.value += 2
else score2.value += 1
// +입주자저축 기입기간
if (surportBank.value[0] >= 24) score2.value += 3
else if (surportBank.value[0] >= 12) score2.value += 2
else if (surportBank.value[0] >= 6) score2.value += 1
// ❤우선공급
if (weddingDays <= 730) score1First.value = true
if (youngestDays <= 730) score1First.value = true
// 부적격
if (surportBank.value[0] < 6) score1.value = 0 // 청약 6회이상
if (weddingDays > 2555 && youngestDays > 2190) score1.value = 0 // 청약 6회이상
if (surportArea.value[0] !== 1) score1.value = 0 // 경기도이외 부적격
if (surportIncomeMy.value && !surportIncomeSpouse.value && myAverage.value > 130) score1.value = 0
if (!surportIncomeMy.value && surportIncomeSpouse.value && myAverage.value > 130) score1.value = 0
if (surportIncomeMy.value && surportIncomeSpouse.value && myAverage.value > 140) score1.value = 0
console.log('===', surportArea.value[0])
// 부적격
if (surportBank.value[0] < 6) score2.value = 0 // 청약 6회이상
if (weddingDays > 2555 && youngestDays > 2190) score2.value = 0 // 청약 6회이상
if (surportArea.value[0] !== 1) score2.value = 0 // 경기도이외 부적격
if (surportIncomeMy.value && !surportIncomeSpouse.value && myAverage.value > 130) score2.value = 0
if (!surportIncomeMy.value && surportIncomeSpouse.value && myAverage.value > 130) score2.value = 0
if (surportIncomeMy.value && surportIncomeSpouse.value && myAverage.value > 140) score2.value = 0

// 당해
if (surportArea.value[0] === 1 && surportArea.value[1] === 30) {
  if (dayjs(noticeDt).diff(dayjs(surportAreaYMD.value), 'day') >= 750) {
    score1Area.value = true
    score2Area.value = true
  }
}

</script>

<template>
  <li>
    <table class="aptTable">
      <colgroup>
        <col style="width:25%">
        <col style="width:25%;">
        <col style="width:auto;">
      </colgroup>
      <tbody>
      <tr class="type">
        <td class="thubm" style="background-color: #F58373;">
          A1
        </td>
        <td colspan="2" class="tit">경기도 구리 갈매(신희타)</td>
      </tr>
      <tr class="score">
        <td>우선</td>
        <td>
          <span v-if="!score1" class="error">부적격</span>
          <em v-else class="score">{{ score1 }}</em>
        </td>
        <td class="opt">
          <span class="area" v-if="score1Area">당해</span>
          <span class="first" v-if="score1First">우선공급</span>
        </td>
      </tr>
      <tr class="score">
        <td>잔여</td>
        <td>
          <span v-if="!score2" class="error">부적격</span>
          <em v-else class="score">{{ score2 }}</em>
        </td>
        <td class="opt">
          <span class="area" v-if="score2Area">당해</span>
        </td>
      </tr>
      </tbody>
    </table>
  </li>
</template>
