<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import mobiscroll from '@mobiscroll/javascript'

const store = useStore()
const surportArea = computed(() : number[] => store.state.surportArea.split(' ').map((n: string | number) => +n))

onMounted(() => {
  mobiscroll.treelist('#applicantArea', {
    display: 'inline',
    layout: 'liquid',
    placeholder: '주거지역선택',
    defaultValue: surportArea.value,
    showInput: false,
    onSet(event: { valueText?: string }) {
      console.log(event.valueText)
      store.dispatch('setSurportArea', event.valueText)
    },
  })
})
</script>
<template>
  <div class="user-data">
    <dl>
      <dt>
        <h3>신청자 주거지역</h3>
      </dt>
      <dd>
        <ul id="applicantArea" class="mbsc-cloak">
          <li>서울
            <ul>
              <li>강남구</li>
              <li>강동구</li>
              <li>강북구</li>
              <li>강서구</li>
              <li>관악구</li>
              <li>광진구</li>
              <li>구로구</li>
              <li>금천구</li>
              <li>노원구</li>
              <li>도봉구</li>
              <li>동대문구</li>
              <li>동작구</li>
              <li>마포구</li>
              <li>서대문구</li>
              <li>서초구</li>
              <li>성동구</li>
              <li>성북구</li>
              <li>송파구</li>
              <li>양천구</li>
              <li>영등포구</li>
              <li>용산구</li>
              <li>은평구</li>
              <li>종로구</li>
              <li>중구</li>
              <li>중랑구</li>
            </ul>
          </li>
          <li>경기
            <ul>
              <li>고양시</li><!-- 0 -->
              <li>남양주시</li><!-- 1 -->
              <li>파주시</li><!-- 2 -->
              <li>의정부시</li><!-- 3 -->
              <li>양주시</li><!-- 4 -->
              <li>포천시</li><!-- 5 -->
              <li>동두천시</li><!-- 6 -->
              <li>가평군</li><!-- 7 -->
              <li>연천군</li><!-- 8 -->
              <li>수원시</li><!-- 9 -->
              <li>용인시</li><!-- 10 -->
              <li>성남시</li><!-- 11 -->
              <li>부천시</li><!-- 12 -->
              <li>화성시</li><!-- 13 -->
              <li>안산시</li><!-- 14 -->
              <li>안양시</li><!-- 15 -->
              <li>평택시</li><!-- 16 -->
              <li>시흥시</li><!-- 17 -->
              <li>김포시</li><!-- 18 -->
              <li>광주시</li><!-- 19 -->
              <li>광명시</li><!-- 20 -->
              <li>군포시</li><!-- 21 -->
              <li>하남시</li><!-- 22 -->
              <li>오산시</li><!-- 23 -->
              <li>이천시</li><!-- 24 -->
              <li>안성시</li><!-- 25 -->
              <li>의왕시</li><!-- 26 -->
              <li>양평군</li><!-- 27 -->
              <li>여주시</li><!-- 28 -->
              <li>과천시</li><!-- 29 -->
              <li>구리시</li><!-- 30 -->
            </ul>
          </li>
          <li>인천
            <ul>천
              <li>중구</li>
              <li>동구</li>
              <li>미추홀구</li>
              <li>연수구</li>
              <li>남동구</li>
              <li>부평구</li>
              <li>계양구</li>
              <li>서구</li>
              <li>강화군</li>
              <li>웅진군</li>
            </ul>
          </li>
        </ul>
      </dd>
    </dl>
  </div>
  <div class="user-data-btn">
    <button class="prev" @click="$router.go(-1)">이전</button>
    <button class="next" @click="$router.push({ name: 'supportAreaYMD' })">다음</button>
  </div>
</template>

<style scoped lang="scss">
</style>
