<script setup lang="ts">
import HeaderArea from '@/components/common/Header.vue'
</script>

<template>
  <header-area v-if="$route.name !== 'Home'" />
  <router-view />
</template>

<style>
</style>
