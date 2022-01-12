<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import dayjs from 'dayjs'
import mobiscroll from '@mobiscroll/javascript'

const store = useStore()
const surportAreaYMD = computed(() : string => store.state.surportAreaYMD)

onMounted(() => {
  store.dispatch('setHeadTitle', '주거지역 전입일')
  mobiscroll.date('#supportAreaYMD', {
    display: 'inline',
    dateFormat: 'yyyy-mm-dd',
    defaultValue: surportAreaYMD.value || dayjs().subtract(1, 'year').toDate(),
    max: new Date(),
    min: new Date(1950, 0, 1),
    onChange(event: { valueText?: string }) {
      store.dispatch('setSurportAreaYMD', event.valueText)
    },
  })
})
</script>
<template>
  <div class="user-data">
    <dl>
      <dt>
      </dt>
      <dd>
        <input type="text" id="supportAreaYMD" v-show="false">
        <div class="ps">
          <ul>
            <li><em>신희타</em>는 경기도, 서울, 인천등 최초 전입일을 입력 해야 합니다.</li>
          </ul>
        </div>
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
