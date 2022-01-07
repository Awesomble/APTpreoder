<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import mobiscroll from '@mobiscroll/javascript'
import { SurportFamilyYMD } from '@/store/state'

const store = useStore()
const surportFamily = computed(() : number[] => store.state.surportFamily.split(' ').map((n: string | number) => +n))
const userFamilyYMD : SurportFamilyYMD = {
  parent1: '',
  parent2: '',
  my: '',
  spouse: '',
  children1: '',
  children2: '',
  children3: '',
  children4: '',
  children5: '',
}
onMounted(() => {
  mobiscroll.treelist('#applicantArea', {
    display: 'inline',
    layout: 'liquid',
    placeholder: '신청자 가족구성',
    defaultValue: surportFamily.value,
    showInput: false,
    onShow(event: { valueText?: string }) {
      store.dispatch('setSurportFamily', event.valueText)
    },
    onChange(event: { valueText?: string }) {
      store.dispatch('setSurportFamily', event.valueText)
      store.dispatch('setSurportFamilyYMD', userFamilyYMD)
    },
  })
})
</script>
<template>
  <div class="user-data">
    <dl>
    <dt>
      <h3>신청자 가족구성</h3>
    </dt>
    <dd>
      <ul id="applicantArea" class="mbsc-cloak">
        <li>
          부모님
          <ul>
            <li>기혼&middot;예비부부
              <ul>
                <li>자녀 0명
                </li>
                <li>자녀 1명
                </li>
                <li>자녀 2명
                </li>
                <li>자녀 3명
                </li>
                <li>자녀 4명</li>
                <li>자녀 5명</li>
              </ul>
            </li>
            <li>한부모
              <ul>
                <li>자녀 0명</li>
                <li>자녀 1명</li>
                <li>자녀 2명</li>
                <li>자녀 3명</li>
                <li>자녀 4명</li>
                <li>자녀 5명</li>
              </ul>
            </li>
            <li>미혼</li>
          </ul>
        </li>
        <li>
          어머님
          <ul>
            <li>기혼&middot;예비부부
              <ul>
                <li>자녀 0명
                </li>
                <li>자녀 1명
                </li>
                <li>자녀 2명
                </li>
                <li>자녀 3명
                </li>
                <li>자녀 4명</li>
                <li>자녀 5명</li>
              </ul>
            </li>
            <li>한부모
              <ul>
                <li>자녀 0명</li>
                <li>자녀 1명</li>
                <li>자녀 2명</li>
                <li>자녀 3명</li>
                <li>자녀 4명</li>
                <li>자녀 5명</li>
              </ul>
            </li>
            <li>미혼</li>
          </ul>
        </li>
        <li>
          아버님
          <ul>
            <li>기혼&middot;예비부부
              <ul>
                <li>자녀 0명
                </li>
                <li>자녀 1명
                </li>
                <li>자녀 2명
                </li>
                <li>자녀 3명
                </li>
                <li>자녀 4명</li>
                <li>자녀 5명</li>
              </ul>
            </li>
            <li>한부모
              <ul>
                <li>자녀 0명</li>
                <li>자녀 1명</li>
                <li>자녀 2명</li>
                <li>자녀 3명</li>
                <li>자녀 4명</li>
                <li>자녀 5명</li>
              </ul>
            </li>
            <li>미혼</li>
          </ul>
        </li>
        <li>
          미부양
          <ul>
            <li>기혼&middot;예비부부
              <ul>
                <li>자녀 0명
                </li>
                <li>자녀 1명
                </li>
                <li>자녀 2명
                </li>
                <li>자녀 3명
                </li>
                <li>자녀 4명</li>
                <li>자녀 5명</li>
              </ul>
            </li>
            <li>한부모
              <ul>
                <li>자녀 0명</li>
                <li>자녀 1명</li>
                <li>자녀 2명</li>
                <li>자녀 3명</li>
                <li>자녀 4명</li>
                <li>자녀 5명</li>
              </ul>
            </li>
            <li>미혼</li>
          </ul>
        </li>
      </ul>
      <div class="ps">
        <ul>
          <li><em>부모님</em>은 두분다 세대원일때 선택합니다.</li>
          <li><em>태아</em>도 자녀로 추가합니다.(예: 자녀2 + 태아1 = 자녀 3명)</li>
        </ul>
      </div>
    </dd>
  </dl>
  </div>
  <div class="user-data-btn">
    <button class="prev" @click="$router.go(-1)">이전</button>
    <button class="next" @click="$router.push({ name: 'supportFamilyYMD' })">다음</button>
  </div>
</template>

<style scoped lang="scss">
</style>
