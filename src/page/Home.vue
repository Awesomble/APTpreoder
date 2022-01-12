<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { SurportFamilyYMD } from '@/store/state'

const store = useStore()
const surportArea = computed(() : string => store.state.surportArea)
const surportAreaYMD = computed(() : string => store.state.surportAreaYMD)
const surportFamilyYMD = computed(() : SurportFamilyYMD => store.state.surportFamilyYMD)
const surportBank = computed(() : string => store.state.surportBank)
const surportIncomeMy = computed(() : number => store.state.surportIncomeMy)
const surportIncomeSpouse = computed(() : number => store.state.surportIncomeSpouse)
const goListActive = ref<boolean>(false)
const checkList = () : void => {
  if (surportFamilyYMD.value.my === '') return
  if (surportArea.value === '0 0') return
  if (surportAreaYMD.value === '') return
  if (surportBank.value === '') return
  if (surportIncomeMy.value === 0 && surportIncomeSpouse.value === 0) return
  goListActive.value = true
}
onMounted(() => {
  setTimeout(() => {
    checkList()
  }, 500)
})
</script>

<template>
  <div class="intro">
    <h1><img src="@/assets/images/logo.png" alt="어썸블 청약 가점계산기 로고">어썸블 청약 가점계산기</h1>
    <router-link :to="{ name: 'supportFamily' }">시작하기</router-link>
    <router-link
        :to="{ name: 'aptList' }"
        class="go-list"
        :class="{'active' : goListActive}">청약리스트 바로가기</router-link>
  </div>
</template>

<style scoped lang="scss">
.intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffcc33;
  h1 {
    font-size: 0;
    color: #75CEFF;
    text-indent: -99999;
    img {
      width: 30vw;
    }
  }
  a {
    margin-top: 10vh;
    color: #fff;
    font-size: 1.5em;
    font-weight: bold;
    text-decoration: none;
  }
  .go-list {
    display: block;
    position: fixed;
    bottom: -100px;
    font-size: 1em;
    border: 2px solid #fff;
    padding: 0.5em 1.5em;
    border-radius: 50px;
    &.active {
      bottom: 30px;
      transition: bottom 0.3s ease-in-out;
    }
  }
}
</style>
