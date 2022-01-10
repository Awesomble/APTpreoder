import dayjs from 'dayjs'
import minMax from 'dayjs/plugin/minMax'
import { SurportFamilyYMD } from '@/store/state'

dayjs.extend(minMax)

export default {}
// 미성년수
// eslint-disable-next-line max-len
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
// 결혼기간
export function WeddingDays(surportWeddingYMD: string, noticeDt: dayjs.ConfigType) : number {
  if (!surportWeddingYMD) return 0
  const cnt : number = dayjs(noticeDt).diff(surportWeddingYMD, 'day')
  console.log('결혼기간 : ', cnt)
  return cnt
}
// 최연소
export function YoungestDays(ymb: dayjs.ConfigType[], noticeDt: dayjs.ConfigType) : number {
  if (!ymb || !ymb.length) return 0
  // @ts-ignore
  const y : dayjs.ConfigType = dayjs.max(ymb)
  const cnt : number = dayjs(noticeDt).diff(y, 'day')
  console.log('최연소자Day : ', cnt)
  return cnt
}
