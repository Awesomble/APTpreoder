<script setup lang="ts">
import mobiscroll from '@mobiscroll/javascript'
import { computed, onMounted, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import dayjs from 'dayjs'

const store = useStore()
const router = useRouter()

const iptFamily = computed(() : void => store.state.surportFamily.split(' '))
const familyCnt = computed(() : void => store.getters.familyCnt)
const data : object = {
  parent1: '',
  parent2: '',
  my: '',
  spouse: '',
  children1: '',
  children2: '',
  children3: '',
  children4: '',
  children5: '',
}

// 다음버튼
const btnNext = () : void => {
  console.log(iptFamily.value)
  if ((iptFamily.value[0] === '0' || iptFamily.value[0] === '2') && !data.parent1) {
    alert('아버님 정보를 입력하세요.')
    return
  }
  if ((iptFamily.value[0] === '0' || iptFamily.value[0] === '1') && !data.parent2) {
    alert('어머님 정보를 입력하세요.')
    return
  }
  if (!data.my) {
    alert('신청자 정보를 입력하세요.')
    return
  }
  if ((iptFamily.value[1] === '0' || iptFamily.value[1] === '2') && !data.spouse) {
    alert('배우자 정보를 입력하세요.')
    return
  }
  if (Number(iptFamily.value[2]) > 0) {
    if ((iptFamily.value[2] === '1') && !data.children1) {
      alert('자녀 정보를 입력하세요.')
      return
    }
    if (iptFamily.value[2] === '2' && (!data.children1 || !data.children2)) {
      alert('자녀 정보를 입력하세요.')
      return
    }
    if (iptFamily.value[2] === '3' && (!data.children1 || !data.children2 || !data.children3)) {
      alert('자녀 정보를 입력하세요.')
      return
    }
    if (iptFamily.value[2] === '4' && (!data.children1 || !data.children2 || !data.children3 || !data.children4)) {
      alert('자녀 정보를 입력하세요.')
      return
    }
    if (iptFamily.value[2] === '5' && (!data.children1 || !data.children2 || !data.children3 || !data.children4 || !data.children5)) {
      alert('자녀 정보를 입력하세요.')
      return
    }
  }

  router.push({ name: 'supportArea' })
}

const mobiOpt1 = {
  display: 'bottom',
  selectType: 'year',
  dateFormat: 'yyyy',
  defaultValue: new Date(1970, 0, 1),
  max: new Date(),
  min: new Date(1930, 0, 1),
}
const mobiOpt2 = {
  display: 'bottom',
  selectType: 'year',
  dateFormat: 'yyyy-mm-dd',
  defaultValue: new Date(1990, 0, 1),
  max: dayjs().add(1, 'year').toDate(),
  min: new Date(1990, 0, 1),
}
onMounted(() => {
  mobiscroll.date('#parents1', {
    ...mobiOpt1,
    onSet(event: { valueText?: string }) {
      data.parent1 = event.valueText
      store.dispatch('setSurportYYYY', data)
    },
  })
  mobiscroll.date('#parents2', {
    ...mobiOpt1,
    onSet(event: { valueText?: string }) {
      data.parent2 = event.valueText
      store.dispatch('setSurportYYYY', data)
    },
  })
  mobiscroll.date('#my', {
    ...mobiOpt1,
    onSet(event: { valueText?: string }) {
      data.my = event.valueText
      store.dispatch('setSurportYYYY', data)
    },
  })
  mobiscroll.date('#spouse', {
    ...mobiOpt1,
    onSet(event: { valueText?: string }) {
      data.spouse = event.valueText
      store.dispatch('setSurportYYYY', data)
    },
  })
  mobiscroll.date('#children1', {
    ...mobiOpt2,
    onSet(event: { valueText?: string }) {
      data.children1 = event.valueText
      store.dispatch('setSurportYYYY', data)
    },
  })
  mobiscroll.date('#children2', {
    ...mobiOpt2,
    onSet(event: { valueText?: string }) {
      data.children2 = event.valueText
      store.dispatch('setSurportYYYY', data)
    },
  })
  mobiscroll.date('#children3', {
    ...mobiOpt2,
    onSet(event: { valueText?: string }) {
      data.children3 = event.valueText
      store.dispatch('setSurportYYYY', data)
    },
  })
  mobiscroll.date('#children4', {
    ...mobiOpt2,
    onSet(event: { valueText?: string }) {
      data.children4 = event.valueText
      store.dispatch('setSurportYYYY', data)
    },
  })
  mobiscroll.date('#children5', {
    ...mobiOpt2,
    onSet(event: { valueText?: string }) {
      data.children5 = event.valueText
      store.dispatch('setSurportYYYY', data)
    },
  })
})
</script>
<template>
  <div class="user-data">
    <dl>
      <dt>
        <h3>가족구성 정보</h3>
      </dt>
      <dd>
        <label for="parents1" v-if="iptFamily[0] === '0' || iptFamily[0] === '2'">
          아버님 :
          <input id="parents1" type="tel" placeholder="YYYY">
        </label>
        <label for="parents2" v-if="iptFamily[0] === '0' || iptFamily[0] === '1'">
          어머님 :
          <input id="parents2" type="tel" placeholder="YYYY">
        </label>
        <label for="my">
          신청자 :
          <input id="my" type="tel" placeholder="YYYY">
        </label>
        <label for="spouse" v-if="iptFamily[1] === '0' || iptFamily[1] === '2'">
          배우자 :
          <input id="spouse" type="tel" placeholder="YYYY">
        </label>
        <div v-if="iptFamily[2] !== '0'">
          <label for="children1" v-if="Number(iptFamily[2]) > 0">
            자녀 1 :
            <input id="children1" type="tel" placeholder="YYYY-MM-DD">
          </label>
          <label for="children2" v-if="Number(iptFamily[2]) > 1">
            자녀 2 :
            <input id="children2" type="tel" placeholder="YYYY-MM-DD">
          </label>
          <label for="children3" v-if="Number(iptFamily[2]) > 2">
            자녀 3 :
            <input id="children3" type="tel" placeholder="YYYY-MM-DD">
          </label>
          <label for="children4" v-if="Number(iptFamily[2]) > 3">
            자녀 4 :
            <input id="children4" type="tel" placeholder="YYYY-MM-DD">
          </label>
          <label for="children5" v-if="Number(iptFamily[2]) > 4">
            자녀 5 :
            <input id="children5" type="tel" placeholder="YYYY-MM-DD">
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
    font-size: 1rem!important;
    margin-bottom: 10px;
    label {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
    }
    input {
      width: 140px;
      line-height: 20px;
      font-size: 1rem!important;
      text-align: right;
      border: none;
      border-bottom: 1px solid #e25c66;
      outline: none;
    }
  }
}
</style>
