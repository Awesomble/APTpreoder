<script setup lang="ts">

import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const navi = computed(() : boolean => store.state.navi)
const headerTitle = computed(() : string => store.state.headerTitle)

const setNavigation = (b: boolean) => {
  store.dispatch('setNavi', b)
}
</script>

<template>
  <header>
    <h1 class="logo" v-if="!headerTitle.length">
      <span>어썸블</span> 청약가점 계산기
    </h1>
    <h1 class="logo" v-else>
      {{ headerTitle }}
    </h1>
    <button class="asb-icon-btn" @click="setNavigation(!navi)">
      <span class="material-icons-outlined">
      more_vert
      </span>
    </button>
    <div class="nav-overlay"
         :class="{'active': navi}"
         v-show="navi"
         @click="setNavigation(false)"
    />
    <nav :class="{'active': navi}">
      <ul>
        <li>
          <router-link :to="{ name: 'supportType' }">
            <span>재설정</span>
          </router-link>
        </li>
        <li>
          <a href="https://aosdin.notion.site/b0cc3c4d13bf409c90ebab523daeb92c" target="_blank">
            <span>문의하기</span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
  header {
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #fff;
    border-bottom: 1px solid #dadce0;
    transition: border .25s;
    color: #5f6368;
    padding: 14px 4px;
    z-index: 9;
    h1 {
      font-size: 22px;
      font-weight: 400;
      text-align: center;
      span {
        color: #e25c66;
      }
    }
    .asb-icon-btn {
      position:absolute;
      top:7px;
      right:0;
      padding: 10px;
      height:45px;
      span {
        font-size: 25px;
      }
    }
    // navigation overlay
    .nav-overlay {
      position: fixed;
      top: 60px;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.1);
      z-index: 8;
      opacity: 0;
      transition: 0.3s opacity;
      &.active {
        opacity: 1;
      }
    }
    nav {
      position: fixed;
      top: 60px;
      right: -200px;
      width: 200px;
      transition: 0.3s right ease-in-out;
      z-index: 9;
      background-color: #fff;
      bottom: 0;
      padding: 20px 10px;
      &.active {
        right: 0;
      }
      ul {
        li {
          padding: 10px;
          font-size: 22px;
        }
      }
    }
  }

</style>
