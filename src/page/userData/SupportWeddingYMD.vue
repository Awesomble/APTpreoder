<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import dayjs from 'dayjs'
import mobiscroll from '@mobiscroll/javascript'

const store = useStore()
const surportWeddingYMD = computed(() : string => store.state.surportWeddingYMD)

onMounted(() => {
  mobiscroll.date('#supportWeddingYMD', {
    display: 'inline',
    dateFormat: 'yyyy-mm-dd',
    defaultValue: surportWeddingYMD.value || dayjs().subtract(1, 'year').toDate(),
    max: dayjs().add(2, 'year'),
    min: new Date(1950, 0, 1),
    onShow(event: { valueText?: string }) {
      store.dispatch('setSurportWeddingYMD', event.valueText)
    },
    onChange(event: { valueText?: string }) {
      store.dispatch('setSurportWeddingYMD', event.valueText)
    },
  })
})
</script>
<template>
  <div class="user-data">
    <dl>
      <dt>
        <h3>신청자 혼인 신고일</h3>
      </dt>
      <dd>
        <input type="text" id="supportWeddingYMD" v-show="false">
        <div class="ps">
          <ul>
            <li><em>혼인과계증명서</em>의 <em>신고일</em>을 입력합니다.</li>
          </ul>
        </div>
      </dd>
    </dl>
  </div>
  <div class="user-data-btn">
    <button class="prev" @click="$router.go(-1)">이전</button>
    <button class="next" @click="$router.push({ name: 'supportArea' })">다음</button>
  </div>
</template>

<style scoped lang="scss">
</style>
