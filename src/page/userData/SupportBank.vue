<script setup lang="ts">
import mobiscroll from '@mobiscroll/javascript'
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
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
    onChange(event: { valueText?: string }) {
      // store.dispatch('setSurportType', event.valueText)
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
