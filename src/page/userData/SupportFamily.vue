<script setup lang="ts">
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import mobiscroll from '@mobiscroll/javascript'

const store = useStore()

onMounted(() => {
  // @ts-ignore
  // eslint-disable-next-line no-undef
  mobiscroll.treelist('#applicantArea', {
    display: 'inline',
    layout: 'liquid',
    placeholder: '결혼유무및 자녁수',
    showInput: false,
    onShow(event: { valueText?: string }) {
      console.log(event.valueText)
      store.dispatch('setSurportFamily', event.valueText)
    },
    onChange(event: { valueText?: string }) {
      console.log(event.valueText)
      store.dispatch('setSurportFamily', event.valueText)
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
            <li>기혼
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
            <li>예비부부</li>
            <li>미혼</li>
          </ul>
        </li>
        <li>
          어머님
          <ul>
            <li>기혼
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
            <li>예비부부</li>
            <li>미혼</li>
          </ul>
        </li>
        <li>
          아버님
          <ul>
            <li>기혼
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
            <li>예비부부</li>
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
