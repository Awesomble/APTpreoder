<script setup lang="ts">
// import {
//   onMounted, ref, reactive, computed,
// } from 'vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
import AptWangsookB1 from '@/components/list/AptWangsookB1.vue'
import AptWangsookB17 from '@/components/list/AptWangsookB17.vue'
import AptWangsookA1 from '@/components/list/AptWangsookA1.vue'
import AptDaejangA7 from '@/components/list/AptDaejangA7.vue'
import AptDaejangA8 from '@/components/list/AptDaejangA8.vue'

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
      <apt-wangsook-b17 />
      <apt-wangsook-a1 />
      <apt-daejang-a7 />
      <apt-daejang-a8 />
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
      overflow: hidden;
      margin:10px;
      border-radius:10px;
    }
  }
}
</style>
