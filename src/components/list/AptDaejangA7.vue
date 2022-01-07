<script setup lang="ts">
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import dayjs from 'dayjs'
import {
  UnAdultCnt, InfantCnt, TransferDays, WeddingDays, YoungestDays,
} from '@/shared/utils'
import { SurportFamilyYMD } from '@/store/state'

const noticeDt = dayjs('2021.12.29')
const store = useStore()
const surportFamilyYMD = computed(() : SurportFamilyYMD => store.state.surportFamilyYMD)
const surportFamily = computed(() : number[] => store.state.surportFamily.split(' ').map((n: string | number) => +n))
const familyChildrenCnt = computed(() : number => store.getters.familyChildrenCnt)
const familyChildrenYMD = computed(() : dayjs.ConfigType[] => store.getters.familyChildrenYMD)
const familyCnt = computed(() : SurportFamilyYMD => store.getters.FamilyCnt)
const surportType = computed(() : string => store.state.surportType)
const surportHomeLessYMD = computed(() : number => Number(store.state.surportHomeLessYMD))
const myAverage = computed(() : number => Number(store.getters.myAverage))
const surportIncomeMy = computed(() : number => Number(store.state.surportIncomeMy))
const surportIncomeSpouse = computed(() : number => Number(store.state.surportIncomeSpouse))

const surportArea = computed(() : number[] => store.state.surportArea.split(' ').map((n: string | number) => +n))
const surportAreaYMD = computed(() : string => store.state.surportAreaYMD)
const surportBank = computed(() : number[] => store.state.surportBank.split(' ').map((n: string | number) => +n))
const score1 = ref<number>(0) // 신혼.한부모
const score2 = ref<number>(0) // 다자녀
const score3 = ref<number>(0) // 생이최초
const score4 = ref<number>(0) // 일반
const score1First = ref<boolean>(false) // 신혼.한부모
const score2First = ref<boolean>(false) // 다자녀
const score3First = ref<boolean>(false) // 생애최초
const score4First = ref<boolean>(false) // 일반
const score1Ranking = ref<number>(0) // 신혼.한부모 랭킹
const score2Ranking = ref<number>(0) // 다자녀
const score3Ranking = ref<number>(0) // 생애최초
const score4Ranking = ref<number>(0) // 일반
const unAdultCnt : number = UnAdultCnt(surportFamilyYMD.value, noticeDt)
const infantCnt : number = InfantCnt(surportFamilyYMD.value, noticeDt)
const transferDays : number = TransferDays(surportAreaYMD.value, noticeDt)
const weddingDays : number = WeddingDays(surportAreaYMD.value, noticeDt)
const youngestDays : number = YoungestDays(familyChildrenYMD.value, noticeDt)
// 기본 자격체크
// 주택유무

// 소득확인
// if (surportIncomeMy.value && surportIncomeSpouse.value && myAverage.value <= 120) score1First.value = true
// if (!surportIncomeMy.value && surportIncomeSpouse.value && myAverage.value <= 100) score1First.value = true
// if (surportIncomeMy.value && !surportIncomeSpouse.value && myAverage.value <= 100) score1First.value = true
// if (surportIncomeMy.value && !surportIncomeSpouse.value && myAverage.value > 130) score1.value = 0
// if (!surportIncomeMy.value && surportIncomeSpouse.value && myAverage.value > 130) score1.value = 0
// if (surportIncomeMy.value && surportIncomeSpouse.value && myAverage.value > 140) score1.value = 0

// ❤️신혼.한부모
// +가구소득
if (surportIncomeMy.value && !surportIncomeSpouse.value && myAverage.value >= 80) score1.value += 1
if (!surportIncomeMy.value && surportIncomeSpouse.value && myAverage.value >= 80) score1.value += 1
if (surportIncomeMy.value && surportIncomeSpouse.value && myAverage.value >= 100) score1.value += 1
// +미성년자녀수
if (unAdultCnt >= 3) score1.value += 3
else if (unAdultCnt === 2) score1.value += 2
else if (unAdultCnt === 1) score1.value += 1
// +해당시도거주기간
if (transferDays >= 1095) score1.value += 3
else if (transferDays >= 365) score1.value += 2
else score1.value += 1
// +입주자저축 기입기간
if (surportBank.value[0] >= 24) score1.value += 3
else if (surportBank.value[0] >= 12) score1.value += 2
else if (surportBank.value[0] >= 6) score1.value += 1
// +혼인기간.한부모
if (surportFamily.value[1] === 0) {
  if (weddingDays <= 1095) score1.value += 3
  else if (weddingDays <= 1825) score1.value += 2
  else if (weddingDays <= 2555) score1.value += 1
} else if (surportFamily.value[1] === 1) {
  if (youngestDays <= 730) score1.value += 3
  else if (youngestDays <= 1460) score1.value += 2
  else if (youngestDays <= 2190) score1.value += 1
}
// 우선공급
// 부적격

// ❤️다자녀
// +미성년자녀수
if (unAdultCnt >= 5) score2.value += 40
else if (unAdultCnt === 4) score2.value += 35
else if (unAdultCnt === 3) score2.value += 30
else score2.value += 0
// +영유아자녀수
if (infantCnt >= 3) score2.value += 15
else if (infantCnt === 2) score2.value += 10
else if (infantCnt === 1) score2.value += 5
// +세대구성
if (surportFamily.value[0] !== 3 || surportFamily.value[1] === 1) score2.value += 5
// +무주택기간
if (surportHomeLessYMD.value >= 10) score2.value += 20
else if (surportHomeLessYMD.value >= 5) score2.value += 15
else if (surportHomeLessYMD.value >= 1) score2.value += 10
// +해당시도거주기간
if (transferDays >= 3650) score2.value += 15
else if (transferDays >= 1825) score2.value += 10
else if (transferDays >= 365) score2.value += 5
// +입주자저축 기입기간
if (surportBank.value[0] >= 120) score2.value += 5
// 우선공급
if (surportArea.value[1] === 1) {
  if (dayjs(surportAreaYMD.value).diff(dayjs(noticeDt), 'day') >= 365) {
    score2First.value = true
  }
}
// 부적격
if (familyChildrenCnt.value < 3) score2.value = 0 // 3자녕 이상만가능
if (myAverage.value > 120) score2.value = 0 // 소득 120%만 가능

// ❤️생애최초
if (myAverage.value <= 100) score3First.value = true
if (myAverage.value > 130) score1.value = 0
// ❤️일반
</script>

<template>
  <li>
    <table class="aptTable">
      <colgroup>
        <col style="width:20%">
        <col style="width:25%;">
        <col style="width:15%;">
        <col style="width:auto;">
      </colgroup>
      <tbody>
      <tr class="type">
        <td rowspan="6" class="thubm" style="background-color: #07553B;">
          A7
        </td>
      </tr>
      <tr class="tit">
        <td colspan="3">경기도 낭양주 왕숙</td>
      </tr>
      <tr class="score">
        <td>신혼·한부모</td>
        <td><span v-if="!score1" class="error">부적격</span><em v-else class="score">{{ score1 }}</em></td>
        <td><span class="ranking">1순위</span><span class="area">당해</span><span class="first">우선공급</span></td>
      </tr>
      <tr class="score">
        <td>다자녀</td>
        <td><span v-if="!score2" class="error">부적격</span><em v-else class="score">{{ score2 }}</em></td>
        <td><span class="ranking">1순위</span><span class="area">당해</span><span class="first">우선공급</span></td>
      </tr>
      <tr class="score">
        <td>생애최초</td>
        <td><span v-if="!score3" class="error">부적격</span><em v-else class="score">{{ score3 }}</em></td>
        <td><span class="ranking">1순위</span><span class="area">당해</span><span class="first">우선공급</span></td>
      </tr>
      <tr class="score">
        <td>일반</td>
        <td><span v-if="!score4" class="error">부적격</span><em v-else class="score">{{ score4 }}</em></td>
        <td><span class="ranking">1순위</span><span class="area">당해</span><span class="first">우선공급</span></td>
      </tr>
      </tbody>
    </table>
  </li>
</template>
