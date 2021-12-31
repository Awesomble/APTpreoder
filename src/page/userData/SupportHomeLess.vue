<script setup lang="ts">
import mobiscroll from '@mobiscroll/javascript'
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const cntValues = []
for (let i = 0; i <= 50; i += 1) {
  cntValues.push({
    display: i === 0 ? '1년미만' : `${i}년`,
    value: i,
  })
}

// 이전버튼
const btnPrev = () : void => {
}
// 다음버튼
const btnNext = () : void => {
}

onMounted(() => {
  mobiscroll.scroller('#applicantHomeLess', {
    display: 'inline',
    onChange(event: { valueText?: string }) {
      // store.dispatch('setSurportType', event.valueText)
    },
    wheels: [
      [{
        circular: false,
        data: cntValues,
        label: '납입횟수',
      }],
    ],
  })
})
</script>
<template>
  <div class="user-data">
    <dl>
      <dt>
        <h3>무주택 기간</h3>
      </dt>
      <dd>
        <input type="text" id="applicantHomeLess" v-show="false">
      </dd>
    </dl>
  </div>
  <div class="user-data-btn">
    <button class="prev" @click="$router.go(-1)">이전</button>
    <button class="next" @click="$router.push({ name: 'supportBank' })">다음</button>
  </div>
</template>

<style scoped lang="scss">
</style>
