<script setup lang="ts">
// import {
//   onMounted, ref, reactive, computed,
// } from 'vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
import AptWangsookB1 from '@/components/list/AptWangsookB1.vue'

// const store = useStore()
// const surportType = computed(() : string => store.getters.surportType)

</script>

<template>
  <div class="user-info">
    <h2>청약가점 리스트</h2>
    <div class="top">
      <div class="type"><h3>어썸블 청약가점 계산기</h3></div>
      <div class="reset"><router-link :to="{ name: 'supportType' }">재설정</router-link></div>
    </div>
  </div>
  <div class="aptListWrap">
    <ul class="aptList">
      <apt-wangsook-b1 />
    </ul>
  </div>
</template>

<style scoped lang="scss">
.user-info{
  position: fixed;
  top: 0;
  width:100%;
  padding: 10px;
  background:#e25c66;
  overflow: hidden;
  z-index:5;
  color: #fff;
  h2{
    font-size: 0px;
    color: #e25c66;
  }
  .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .type{
      & h3{
        color: #fff;
        font-size: 20px;
      }
    }
    .reset{
      a {
        color: #fff;
        font-size: 20px;
      }
    }
  }
}
.aptListWrap{
  padding-top: 50px;
  .aptList{
    z-index:1;
    li{
      margin:20px;
      min-height:60px;
      border:1px solid #000;
      border-radius:10px;
    }
  }
}
</style>
