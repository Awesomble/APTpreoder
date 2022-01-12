<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import mobiscroll from '@mobiscroll/javascript'

interface CntValues {
  value: number,
  display: string,
}

const store = useStore()
const cntValues : Array<CntValues> = []
const surportHomeLessYMD = computed(() : number[] => store.state.surportHomeLessYMD.split(' ').map((n: string | number) => +n))

for (let i = 0; i <= 50; i += 1) {
  cntValues.push({
    display: i === 0 ? '6개월 이상' : `${i}년 이상`,
    value: i,
  })
}

onMounted(() => {
  store.dispatch('setHeadTitle', '무주택 기간')
  mobiscroll.treelist('#applicantArea', {
    display: 'inline',
    showInput: false,
    defaultValue: surportHomeLessYMD.value,
    onShow(event: { valueText?: string, value?: string }) {
      console.log(event.valueText)
      store.dispatch('setSurportHomeLessYMD', event.valueText)
    },
    onChange(event: { valueText?: string, value?: string }) {
      console.log(event.valueText, event)
      store.dispatch('setSurportHomeLessYMD', event.valueText)
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
        <ul id="applicantArea" class="mbsc-cloak">
          <li v-for="s in cntValues"
              :key="`hrSelect${s.value}`"
          >{{ s.display }}</li>
        </ul>
        <div class="ps">
          <ul>
            <li>세대원 모두 <em>무주택</em>만 지원 가능합니다.</li>
          </ul>
        </div>
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
