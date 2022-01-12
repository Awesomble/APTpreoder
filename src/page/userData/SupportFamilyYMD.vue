<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import dayjs from 'dayjs'
import mobiscroll from '@mobiscroll/javascript'
import { SurportFamilyYMD } from '@/store/state'

const store = useStore()
const router = useRouter()
const surportFamilyYMD = computed(() : SurportFamilyYMD => store.state.surportFamilyYMD)
const surportFamily = computed(() : number[] => store.state.surportFamily.split(' ').map((n: string | number) => +n))
const iptFamily = computed(() : string => store.state.surportFamily.split(' '))
const userFamilyYMD : SurportFamilyYMD = {
  parent1: surportFamilyYMD.value.parent1,
  parent2: surportFamilyYMD.value.parent2,
  my: surportFamilyYMD.value.my,
  spouse: surportFamilyYMD.value.spouse,
  children1: surportFamilyYMD.value.children1,
  children2: surportFamilyYMD.value.children2,
  children3: surportFamilyYMD.value.children3,
  children4: surportFamilyYMD.value.children4,
  children5: surportFamilyYMD.value.children5,
}

// 다음버튼
const btnNext = () : void => {
  if ((iptFamily.value[0] === '0' || iptFamily.value[0] === '2') && !userFamilyYMD.parent1) {
    alert('아버님 정보를 입력하세요.')
    return
  }
  if ((iptFamily.value[0] === '0' || iptFamily.value[0] === '1') && !userFamilyYMD.parent2) {
    alert('어머님 정보를 입력하세요.')
    return
  }
  if (!userFamilyYMD.my) {
    alert('신청자 정보를 입력하세요.')
    return
  }
  if ((iptFamily.value[1] === '0') && !userFamilyYMD.spouse) {
    alert('배우자 정보를 입력하세요.')
    return
  }
  if (Number(iptFamily.value[2]) > 0) {
    if ((iptFamily.value[2] === '1') && !userFamilyYMD.children1) {
      alert('자녀 정보를 입력하세요.')
      return
    }
    if (iptFamily.value[2] === '2' && (!userFamilyYMD.children1 || !userFamilyYMD.children2)) {
      alert('자녀 정보를 입력하세요.')
      return
    }
    if (iptFamily.value[2] === '3' && (!userFamilyYMD.children1 || !userFamilyYMD.children2 || !userFamilyYMD.children3)) {
      alert('자녀 정보를 입력하세요.')
      return
    }
    if (iptFamily.value[2] === '4' && (!userFamilyYMD.children1 || !userFamilyYMD.children2 || !userFamilyYMD.children3 || !userFamilyYMD.children4)) {
      alert('자녀 정보를 입력하세요.')
      return
    }
    if (iptFamily.value[2] === '5' && (!userFamilyYMD.children1 || !userFamilyYMD.children2 || !userFamilyYMD.children3 || !userFamilyYMD.children4 || !userFamilyYMD.children5)) {
      alert('자녀 정보를 입력하세요.')
      return
    }
  }
  store.dispatch('setSurportFamilyYMD', userFamilyYMD)
  if (surportFamily.value[1] === 0) router.push({ name: 'supportWeddingYMD' })
  else router.push({ name: 'supportArea' })
}
const date1960 = new Date(1960, 0, 1)
const date1980 = new Date(1970, 0, 1)
const date1990 = new Date(2020, 0, 1)

const mobiOpt1: any = {
  display: 'bottom',
  selectType: 'year',
  dateFormat: 'yyyy',
  max: new Date(),
  min: new Date(1930, 0, 1),
}
const mobiOpt2: any = {
  display: 'bottom',
  selectType: 'year',
  dateFormat: 'yyyy-mm-dd',
  max: dayjs().add(1, 'year').toDate(),
  min: new Date(1980, 0, 1),
}
onMounted(() => {
  store.dispatch('setHeadTitle', '가족구성 정보')
  mobiscroll.date('#parents1', {
    ...mobiOpt1,
    defaultValue: surportFamilyYMD.value.parent1 || date1960,
    onSet(event: { valueText?: string }) {
      userFamilyYMD.parent1 = event.valueText ? event.valueText : ''
      store.dispatch('setSurportFamilyYMD', userFamilyYMD)
    },
  })
  mobiscroll.date('#parents2', {
    ...mobiOpt1,
    defaultValue: surportFamilyYMD.value.parent2 || date1960,
    onSet(event: { valueText?: string }) {
      userFamilyYMD.parent2 = event.valueText ? event.valueText : ''
      store.dispatch('setSurportFamilyYMD', userFamilyYMD)
    },
  })
  mobiscroll.date('#my', {
    ...mobiOpt1,
    defaultValue: surportFamilyYMD.value.my || date1980,
    onSet(event: { valueText?: string }) {
      userFamilyYMD.my = event.valueText ? event.valueText : ''
      store.dispatch('setSurportFamilyYMD', userFamilyYMD)
    },
  })
  mobiscroll.date('#spouse', {
    ...mobiOpt1,
    defaultValue: surportFamilyYMD.value.spouse || date1980,
    onSet(event: { valueText?: string }) {
      userFamilyYMD.spouse = event.valueText ? event.valueText : ''
      store.dispatch('setSurportFamilyYMD', userFamilyYMD)
    },
  })
  mobiscroll.date('#children1', {
    ...mobiOpt2,
    defaultValue: surportFamilyYMD.value.children1 || date1990,
    onSet(event: { valueText?: string }) {
      userFamilyYMD.children1 = event.valueText ? event.valueText : ''
      store.dispatch('setSurportFamilyYMD', userFamilyYMD)
    },
  })
  mobiscroll.date('#children2', {
    ...mobiOpt2,
    defaultValue: surportFamilyYMD.value.children2 || date1990,
    onSet(event: { valueText?: string }) {
      userFamilyYMD.children2 = event.valueText ? event.valueText : ''
      store.dispatch('setSurportFamilyYMD', userFamilyYMD)
    },
  })
  mobiscroll.date('#children3', {
    ...mobiOpt2,
    defaultValue: surportFamilyYMD.value.children3 || date1990,
    onSet(event: { valueText?: string }) {
      userFamilyYMD.children3 = event.valueText ? event.valueText : ''
      store.dispatch('setSurportFamilyYMD', userFamilyYMD)
    },
  })
  mobiscroll.date('#children4', {
    ...mobiOpt2,
    defaultValue: surportFamilyYMD.value.children4 || date1990,
    onSet(event: { valueText?: string }) {
      userFamilyYMD.children4 = event.valueText ? event.valueText : ''
      store.dispatch('setSurportFamilyYMD', userFamilyYMD)
    },
  })
  mobiscroll.date('#children5', {
    ...mobiOpt2,
    defaultValue: surportFamilyYMD.value.children5 || date1990,
    onSet(event: { valueText?: string }) {
      userFamilyYMD.children5 = event.valueText ? event.valueText : ''
      store.dispatch('setSurportFamilyYMD', userFamilyYMD)
    },
  })
})
</script>
<template>
  <div class="user-data">
    <dl>
      <dt>
      </dt>
      <dd>
        <label for="parents1" v-if="iptFamily[0] === '0' || iptFamily[0] === '2'">
          아버님 :
          <input id="parents1" type="tel" placeholder="YYYY"
                 :value="surportFamilyYMD.parent1">
        </label>
        <label for="parents2" v-if="iptFamily[0] === '0' || iptFamily[0] === '1'">
          어머님 :
          <input id="parents2" type="tel" placeholder="YYYY"
                 :value="surportFamilyYMD.parent2">
        </label>
        <label for="my">
          신청자 :
          <input id="my" type="tel" placeholder="YYYY"
                 :value="surportFamilyYMD.my">
        </label>
        <label for="spouse" v-if="iptFamily[1] === '0'">
          배우자 :
          <input id="spouse" type="tel" placeholder="YYYY"
                 :value="surportFamilyYMD.spouse">
        </label>
        <div v-if="iptFamily[2] !== '0'">
          <label for="children1" v-if="Number(iptFamily[2]) > 0">
            자녀 1 :
            <input id="children1" type="tel" placeholder="YYYY-MM-DD"
                   :value="surportFamilyYMD.children1">
          </label>
          <label for="children2" v-if="Number(iptFamily[2]) > 1">
            자녀 2 :
            <input id="children2" type="tel" placeholder="YYYY-MM-DD"
                   :value="surportFamilyYMD.children2">
          </label>
          <label for="children3" v-if="Number(iptFamily[2]) > 2">
            자녀 3 :
            <input id="children3" type="tel" placeholder="YYYY-MM-DD"
                   :value="surportFamilyYMD.children3">
          </label>
          <label for="children4" v-if="Number(iptFamily[2]) > 3">
            자녀 4 :
            <input id="children4" type="tel" placeholder="YYYY-MM-DD"
                   :value="surportFamilyYMD.children4">
          </label>
          <label for="children5" v-if="Number(iptFamily[2]) > 4">
            자녀 5 :
            <input id="children5" type="tel" placeholder="YYYY-MM-DD"
                   :value="surportFamilyYMD.children5">
          </label>
        </div>
        <div class="ps">
          <ul>
            <li><em>태아</em>일경우 출산예정일을 입력합니다.</li>
          </ul>
        </div>
      </dd>
    </dl>
  </div>
  <div class="user-data-btn">
    <button class="prev" @click="$router.go(-1)">이전</button>
    <button class="next" @click="btnNext">다음</button>
  </div>
</template>

<style scoped lang="scss">
dl {
  dt {}
  dd {
    font-size: 1em!important;
    margin-bottom: 10px;
    label {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
    }
    input {
      width: 140px;
      line-height: 20px;
      font-size: 1em!important;
      text-align: right;
      border: none;
      border-bottom: 1px solid #ccc;
      outline: none;
    }
  }
}
</style>
