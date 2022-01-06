import { computed } from 'vue'
import { useStore } from 'vuex'
import dayjs from 'dayjs'
import { SurportFamilyYMD } from '@/store/state'

export default {}
// 미성년수
export function UnAdultCnt(surportFamilyYMD: SurportFamilyYMD, noticeDt: dayjs.ConfigType) : number {
  let cnt : number = 0
  if (surportFamilyYMD.children1 && dayjs(noticeDt).diff(surportFamilyYMD.children1, 'day') <= 3635) cnt += 1
  if (surportFamilyYMD.children2 && dayjs(noticeDt).diff(surportFamilyYMD.children2, 'day') <= 3635) cnt += 1
  if (surportFamilyYMD.children3 && dayjs(noticeDt).diff(surportFamilyYMD.children3, 'day') <= 3635) cnt += 1
  if (surportFamilyYMD.children4 && dayjs(noticeDt).diff(surportFamilyYMD.children4, 'day') <= 3635) cnt += 1
  if (surportFamilyYMD.children5 && dayjs(noticeDt).diff(surportFamilyYMD.children5, 'day') <= 3635) cnt += 1
  console.log('미션년자녀수 : ', cnt)
  return cnt
}
// 영유아수
export function InfantCnt(surportFamilyYMD: SurportFamilyYMD, noticeDt: dayjs.ConfigType) : number {
  let cnt : number = 0
  if (surportFamilyYMD.children1 && dayjs(noticeDt).diff(surportFamilyYMD.children1, 'day') <= 2190) cnt += 1
  if (surportFamilyYMD.children2 && dayjs(noticeDt).diff(surportFamilyYMD.children2, 'day') <= 2190) cnt += 1
  if (surportFamilyYMD.children3 && dayjs(noticeDt).diff(surportFamilyYMD.children3, 'day') <= 2190) cnt += 1
  if (surportFamilyYMD.children4 && dayjs(noticeDt).diff(surportFamilyYMD.children4, 'day') <= 2190) cnt += 1
  if (surportFamilyYMD.children5 && dayjs(noticeDt).diff(surportFamilyYMD.children5, 'day') <= 2190) cnt += 1
  console.log('영유아자녀수 : ', cnt)
  return cnt
}
// 전입기간
export function TransferDays(surportAreaYMD: string, noticeDt: dayjs.ConfigType) : number {
  const cnt : number = dayjs(noticeDt).diff(surportAreaYMD, 'day')
  console.log('잔입후경과시간 : ', cnt)
  return cnt
}
