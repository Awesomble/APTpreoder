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
          unAdultCnt: [
            {
              min: null,
              max: null,
              val: 1,
              score: 1,
              desc: '미성년자녀 1명',
            },
            {
              min: null,
              max: null,
              val: 2,
              score: 2,
              desc: '미성년자녀 2명',
            },
            {
              min: null,
              max: null,
              val: 3,
              score: 3,
              desc: '미성년자녀 3명',
            },
            {
              min: null,
              max: null,
              val: 4,
              score: 3,
              desc: '미성년자녀 4명',
            },
            {
              min: null,
              max: null,
              val: 5,
              score: 3,
              desc: '미성년자녀 5명',
            },
          ],
          transferDays: [
            {
              min: 1095,
              max: null,
              val: null,
              score: 3,
              desc: '해당시도 거주기간 3년이상',
            },
            {
              min: 365,
              max: null,
              val: null,
              score: 2,
              desc: '해당시도 거주기간 1년이상',
            },
            {
              min: null,
              max: 365,
              val: null,
              score: 1,
              desc: '해당시도 거주기간 1년이하',
            },
          ],
          paymentCnt: [
            {
              min: 24,
              max: null,
              val: null,
              score: 3,
              desc: '입주자저축 납입횟수 24회 이상',
            },
            {
              min: 12,
              max: null,
              val: null,
              score: 2,
              desc: '입주자저축 납입횟수 12회 이상',
            },
            {
              min: 6,
              max: null,
              val: null,
              score: 1,
              desc: '입주자저축 납입횟수 6회 이상',
            },
          ],
          marriagePeriod: [
            {
              min: 1095,
              max: null,
              val: null,
              score: 3,
              desc: '혼인가간 3년이하',
            },
            {
              min: 1825,
              max: null,
              val: null,
              score: 2,
              desc: '혼인가간 5년이하',
            },
            {
              min: 2555,
              max: null,
              val: null,
              score: 1,
              desc: '혼인가간 7년이하',
            },
          ],
          singleParent: [
            {
              min: 750,
              max: null,
              val: null,
              score: 3,
              desc: '한부모 자녀나이 2세이하',
            },
            {
              min: 1460,
              max: null,
              val: null,
              score: 2,
              desc: '한부모 자녀나이 4세이하',
            },
            {
              min: 2190,
              max: null,
              val: null,
              score: 1,
              desc: '한부모 자녀나이 6세이하',
            },
          ],
        },
        badge: {
          rangking: {
            rule: [
              [
                {
                  marriagePeriod: {
                    min: null,
                    max: 2555,
                    val: null,
                    score: 1,
                    desc: '혼인기간 7년미만',
                  },
                  childrenCnt: {
                    min: 1,
                    max: null,
                    val: null,
                    score: 1,
                    desc: '자녀 유무',
                  },
                },
              ],
              [
                {
                  marriagePeriod: {
                    min: null,
                    max: 2555,
                    val: null,
                    score: 1,
                    desc: '혼인기간 7년미만',
                  },
                  childrenCnt: {
                    min: 1,
                    max: null,
                    val: null,
                    score: 1,
                    desc: '자녀 유무',
                  },
                },
              ],
            ],
            etc: true,
          },
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
