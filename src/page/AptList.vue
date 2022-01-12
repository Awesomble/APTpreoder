<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { useStore } from 'vuex'
import AptWangsookB1 from '@/components/list/AptWangsookB1.vue'
import AptWangsookB17 from '@/components/list/AptWangsookB17.vue'
import AptWangsookA1 from '@/components/list/AptWangsookA1.vue'
import AptWangsookA2 from '@/components/list/AptWangsookA2.vue'
import AptDaejangA7 from '@/components/list/AptDaejangA7.vue'
import AptDaejangA8 from '@/components/list/AptDaejangA8.vue'
import AptYeoggogA2 from '@/components/list/AptYeoggogA2.vue'
import AptGoyangS5 from '@/components/list/AptGoyangS5.vue'
import AptGoyangS6 from '@/components/list/AptGoyangS6.vue'
import AptGoyangS1 from '@/components/list/AptGoyangS1.vue'
import AptGoyangA4 from '@/components/list/AptGoyangA4.vue'
import AptSiheungS1 from '@/components/list/AptSiheungS1.vue'
import AptSiheungA10 from '@/components/list/AptSiheungA10.vue'
import AptGeomoA5 from '@/components/list/AptGeomoA5.vue'
import AptAnsanA9 from '@/components/list/AptAnsanA9.vue'
import AptAnsanA24 from '@/components/list/AptAnsanA24.vue'
import AptAnsanB1 from '@/components/list/AptAnsanB1.vue'
import AptAnsanA1 from '@/components/list/AptAnsanA1.vue'
import AptAnsanA136 from '@/components/list/AptAnsanA136.vue'
import AptSeongnamA4 from '@/components/list/AptSeongnamA4.vue'
import AptDaejangA5 from '@/components/list/AptDaejangA5.vue'
import AptDaebang from '@/components/list/AptDaebang.vue'
import AptGyeyangA9 from '@/components/list/AptGyeyangA9.vue'
import AptGuliA1 from '@/components/list/AptGuliA1.vue'
import AptType01 from '@/components/list/AptType01.vue'

const list = reactive<{ [key: string]: any }>([
  {
    noticeDt: '2021.12.29',
    disType: {
      type: 'as4',
      subType: '',
      row: {
        honeymoon: true,
        singleParent: true,
        multiChildren: true,
        firstLife: true,
        normal: true,
        normalUnde60: false,
      },
    },
    rule: {
      honeymoon: {
        score: {
          income: {
            dualIncome: {
              min: null,
              max: 100,
              score: 1,
              desc: '월소득 100%이하',
            },
            singleIncome: {
              min: null,
              max: 80,
              score: 1,
              desc: '월소득 80%이하',
            },
          },
          unAdultCnt: [],
        },
      },
    },
    aptInfo: {
      title: '남양주 왕숙',
      description: '',
      type: 'B1',
      color: {
        main: '#3f97f6',
        sub: '#3f97f6',
      },
      adress: {
        sity: {
          name: '경기도',
          code: '1',
        },
        sigungu: {
          name: '남양주시',
          code: '1',
        },
      },
    },
    areaPriority: {
      area: [1, 1],
      areaTermDays: 365,
    },
    ineligible: {},
  },
])

const store = useStore()
onMounted(() => {
  store.dispatch('setHeadTitle', '')
})
</script>

<template>
  <div class="user-info">
  </div>
  <div class="aptListWrap">
    <ul class="aptList">
<!--      <li v-for="(item, idx) in list" :key="`item${idx}`" >-->
<!--        <apt-type01 :data="item" />-->
<!--      </li>-->
      <apt-wangsook-b1 />
      <apt-wangsook-b17 />
      <apt-wangsook-a1 />
      <apt-wangsook-a2 />
      <apt-daejang-a7 />
      <apt-daejang-a8 />
      <apt-daejang-a5 />
      <apt-yeoggog-a2 />
      <apt-goyang-s1 />
      <apt-goyang-s5 />
      <apt-goyang-s6 />
      <apt-goyang-a4 />
      <apt-siheung-s1 />
      <apt-siheung-a10 />
      <apt-geomo-a5 />
      <apt-ansan-a9 />
      <apt-ansan-a24 />
      <apt-ansan-b1 />
      <apt-ansan-a1 />
      <apt-ansan-a136 />
      <apt-seongnam-a4 />
      <apt-gyeyang-a9 />
      <apt-daebang />
      <apt-guli-a1 />
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
