<script setup lang="ts">
import Logo from '@/assets/images/logo.png'
</script>

<template>
  <div class="app-top-bar">
    <div class="app-top-bar__left">
      <a href="/" class="app-top-bar__logo">
        <img :src="Logo" alt="Logo">
      </a>
    </div>
    <div class="app-top-bar__right">
      <div class="app-top-bar__right-item">
        <a href="#" class="app-top-bar__link">
          <i class="fas fa-sign-in-alt"></i>
          <span>Login</span>
        </a>
      </div>
      <div class="app-top-bar__right-item">
        <a href="#" class="app-top-bar__link">
          <i class="fas fa-user-plus"></i>
          <span>Register</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .app-top-bar {
    height: 30px;
  }

</style>
