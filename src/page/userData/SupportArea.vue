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
  mobiscroll.treelist('#applicantArea', {
    display: 'inline',
    layout: 'liquid',
    placeholder: '주거지역선택',
    showInput: false,
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
              <li>고양시</li>
              <li>남양주시</li>
              <li>파주시</li>
              <li>의정부시</li>
              <li>양주시</li>
              <li>포천시</li>
              <li>동두천시</li>
              <li>가평군</li>
              <li>연천군</li>
              <li>수원시</li>
              <li>용인시</li>
              <li>성남시</li>
              <li>부천시</li>
              <li>화성시</li>
              <li>안산시</li>
              <li>안양시</li>
              <li>평택시</li>
              <li>시흥시</li>
              <li>김포시</li>
              <li>광주시</li>
              <li>광명시</li>
              <li>군포시</li>
              <li>하남시</li>
              <li>오산시</li>
              <li>이천시</li>
              <li>안성시</li>
              <li>의왕시</li>
              <li>양평군</li>
              <li>여주시</li>
              <li>과천시</li>
            </ul>
          </li>
          <li>인천
            <ul>
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
