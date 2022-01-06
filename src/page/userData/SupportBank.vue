<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import mobiscroll from '@mobiscroll/javascript'

const store = useStore()
const surportBank = computed(() : number[] => store.state.surportBank.split(' ').map((n: string | number) => +n))
const cntValues: any[] = []
const amountValues: any[] = []

for (let i = 0; i <= 100; i += 1) {
  cntValues.push({
    display: i,
    value: i,
  })
}
for (let i = 0; i <= 100000000; i += 100000) {
  amountValues.push({
    display: `${i.toLocaleString()}원`,
    value: i,
  })
}

onMounted(() => {
  mobiscroll.scroller('#applicantBank', {
    display: 'inline',
    showLabel: true,
    onInit(event: any, inst: any) {
      inst.setVal(surportBank.value)
    },
    onChange(event: { valueText?: string }) {
      console.log(event.valueText)
      store.dispatch('setSurportBank', event.valueText)
    },
    wheels: [
      [{
        circular: false,
        data: cntValues,
        label: '납입횟수',
      }, {
        circular: false,
        data: amountValues,
        label: '인정금액',
      }],
    ],
  })
})
</script>
<template>
  <div class="user-data">
    <dl>
      <dt>
        <h3>청약통장</h3>
      </dt>
      <dd>
        <input type="text" id="applicantBank" v-show="false">
        <div class="ps">
          <ul>
            <li><em>공고일</em>이전 까지의 납입횟수및 인정금액을 입력합니다.</li>
          </ul>
        </div>
      </dd>
    </dl>
  </div>
  <div class="user-data-btn">
    <button class="prev" @click="$router.go(-1)">이전</button>
    <button class="next" @click="$router.push({ name: 'supportIncome' })">다음</button>
  </div>
</template>

<style scoped lang="scss">
</style>
