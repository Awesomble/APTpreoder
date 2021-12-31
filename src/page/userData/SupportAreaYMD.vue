<script setup lang="ts">
import mobiscroll from '@mobiscroll/javascript'
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import dayjs from "dayjs";

const store = useStore()

// 이전버튼
const btnPrev = () : void => {
}
// 다음버튼
const btnNext = () : void => {
}

onMounted(() => {
  mobiscroll.date('#applicantYYYY', {
    display: 'inline',
    dateFormat: 'yyyy-mm-dd',
    defaultValue: dayjs().subtract(1, 'year').toDate(),
    max: new Date(),
    min: new Date(1950, 0, 1),
    onChange(event: { valueText?: string }) {
      store.dispatch('setSurportType', event.valueText)
    },
  })
})
</script>
<template>
  <div class="user-data">
    <dl>
      <dt>
        <h3>신청자 주거지역 전입일</h3>
      </dt>
      <dd>
        <input type="text" id="applicantYYYY" v-show="false">
      </dd>
    </dl>
  </div>
  <div class="user-data-btn">
    <button class="prev" @click="$router.go(-1)">이전</button>
    <button class="next" @click="$router.push({ name: 'supportHomeLess' })">다음</button>
  </div>
</template>

<style scoped lang="scss">
</style>
