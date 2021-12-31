<script setup lang="ts">
import mobiscroll from '@mobiscroll/javascript'
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

// 이전버튼
const btnPrev = () : void => {
}
// 다음버튼
const btnNext = () : void => {
}

onMounted(() => {
  console.log(mobiscroll)
  mobiscroll.scroller('#applicantType', {
    display: 'inline',
    onSet(event: { valueText?: string }) {
      store.dispatch('setSurportType', event.valueText)
    },
    wheels: [
      [{
        data: [{
          value: 0,
          display: '신혼부부·한부모',
        }, {
          value: 1,
          display: '다자녀가구',
        }, {
          value: 2,
          display: '생애최초',
        }, {
          value: 3,
          display: '노부모부양',
        }, {
          value: 4,
          display: '일반공급',
        }],
      }],
    ],
  })
})
</script>
<template>
  <div class="user-data">
    <dl>
      <dt>
        <h3>지원타입</h3>
      </dt>
      <dd>
        <input type="text" id="applicantType" v-show="false">
      </dd>
    </dl>
  </div>
  <div class="user-data-btn">
    <button class="prev" @click="$router.go(-1)">이전</button>
    <button class="next" @click="$router.push({ name: 'supportFamily' })">다음</button>
  </div>
</template>

<style scoped lang="scss">
</style>
