<script setup lang="ts">
import {
  computed, onMounted, reactive, ref,
} from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const myAverage = computed(() : number => store.getters.myAverage)
const iptFamily = computed(() : string[] => store.state.surportFamily.split(' '))
const mobiOpt: any = {
  preset: 'decimal',
  scale: 0,
  min: -999999,
  max: 999999999,
  prefix: '₩',
  thousandsSeparator: ',',
}
// 원 특수문자

// 다음버튼
const btnNext = () : void => {
}

onMounted(() => {
  // @ts-ignore
  // eslint-disable-next-line no-undef
  mobiscroll.numpad('#ipt1', {
    ...mobiOpt,
    onSet(event: { valueText?: string }) {
      const { valueText } = event
      store.dispatch('setSurportIncome', { key: 'my', value: valueText ? Number(valueText.replace(/\,/g, '')) : 0 })
    },
  })
  // @ts-ignore
  // eslint-disable-next-line no-undef
  mobiscroll.numpad('#ipt2', {
    ...mobiOpt,
    onSet(event: { valueText?: string }) {
      const { valueText } = event
      store.dispatch('setSurportIncome', { key: 'spouse', value: valueText ? Number(valueText.replace(/\,/g, '')) : 0 })
    },
  })
})
</script>
<template>
  <div class="user-data">
    <dl>
      <dt>
        <h3>월 소득</h3>
      </dt>
      <dd>
        <label for="ipt1">
          신청자 :
          <input id="ipt1" type="tel" >
        </label>
        <label for="ipt2" v-show="iptFamily[1] === '0' || iptFamily[1] === '2'">
          맞벌이 :
          <input id="ipt2" type="tel">
        </label>
        <div class="ps">
          <ul>
            <li v-if="myAverage">전년도 도시근로자 가구당 월평균소득 기준 <em>{{ myAverage }}%</em> 이하입니다. </li>
            <li v-show="iptFamily[1] === '0' || iptFamily[1] === '2'"><em>맞벌이</em> 소득란은 <em>공고일 기준</em> 배우자소득이 있을때만 입력합니다.</li>
            <li><em>맞벌이</em>외 다른 <em>직계존속</em>의 소득은 합산하여 신청자 소득에 입력합니다.</li>
          </ul>
        </div>
      </dd>
    </dl>
  </div>
  <div class="user-data-btn">
    <button class="prev" @click="$router.go(-1)">이전</button>
    <button class="next" @click="btnNext">다음</button>
  </div>
</template>

<style scoped lang="scss">
 dl {
   dt {}
   dd {
     font-size: 1rem!important;
     margin-bottom: 10px;
     label {
       display: flex;
       justify-content: center;
       margin-bottom: 10px;
       &:after {
         content: '원';
         padding-left: 5px;
         vertical-align: bottom;
       }
     }
     input {
       width: 130px;
       line-height: 20px;
       font-size: 1rem!important;
       text-align: right;
       border: none;
       border-bottom: 1px solid #e25c66;
       outline: none;
     }
   }
 }
</style>
