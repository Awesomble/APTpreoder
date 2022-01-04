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
  <div class="aptListWrap">
    <ul class="aptList">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.intro{
  position:fixed;
  top:0;
  width:100%;
  height:30vh;
  background:#ccc;
  overflow: hidden;
  z-index:5;
  & h1{
    height:50%;
    & img{
      width:30vw;
      height:30vw;
    }
  }
}
.aptListWrap{
  padding:30vh 0 10vh;

}
.aptList{
  z-index:1;
  li{
    margin:20px;
    padding:20px;
    height:60px;
    border:1px solid #000;
    border-radius:10px;
  }
}
</style>
