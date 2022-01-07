<script setup lang="ts">
import AptWangsookB1 from '@/components/list/AptWangsookB1.vue'
import AptWangsookB17 from '@/components/list/AptWangsookB17.vue'
import AptWangsookA1 from '@/components/list/AptWangsookA1.vue'
import AptDaejangA7 from '@/components/list/AptDaejangA7.vue'
import AptDaejangA8 from '@/components/list/AptDaejangA8.vue'
import AptGoyangS5 from '@/components/list/AptGoyangS5.vue'
import AptGoyangS6 from '@/components/list/AptGoyangS6.vue'
</script>

<template>
  <div class="user-info">
  </div>
  <div class="aptListWrap">
    <ul class="aptList">
      <apt-wangsook-b1 />
      <apt-wangsook-b17 />
      <apt-wangsook-a1 />
      <apt-daejang-a7 />
      <apt-daejang-a8 />
      <apt-goyang-s5 />
      <apt-goyang-s6 />
    </ul>
  </div>
</template>

<style scoped lang="scss">
.aptListWrap{
  padding-top: 60px;
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
