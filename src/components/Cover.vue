<script setup lang="ts">
</script>

<template>
  <div class="hello">
    <div>안녕하세요.</div>
  </div>
</template>

<style scoped lang="scss">
  .hello {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #FF9292;
    color: #fff;
    font-size: 10vw;
    // align center and vertical center
    > div {
      display: flex;
    }
  }
</style>
