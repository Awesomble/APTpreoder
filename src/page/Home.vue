<script setup lang="ts">
// import {
//   onMounted, ref, reactive, computed,
// } from 'vue'
// import { useStore } from 'vuex'

// const store = useStore()

</script>

<template>
  <div class="intro">
    <h1><img src="@/assets/images/logo.png" alt="어썸블 사전청약 로고"></h1>
    <router-link :to="{ name: 'supportType' }">사전청약 시작</router-link>
  </div>
</template>

<style scoped lang="scss">
.intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #75CEFF;
  h1 {
    img {
      width: 30vw;
    }
  }
  a {
    margin-top: 10vh;
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
  }
}
</style>
