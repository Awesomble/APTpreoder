<script setup lang="ts">
</script>

<template>
  <li>
    <table class="aptTable">
      <colgroup>
        <col style="width:20%;">
        <col style="width:20%;">
        <col style="width:20%;">
        <col style="width:20%;">
        <col style="width:auto">
      </colgroup>
      <tbody>
        <tr>
          <td rowspan="2" class="thubm">왕숙<br>B2</td>
          <td>내용</td>
          <td>내용</td>
          <td>내용</td>
          <td>내용</td>
        </tr>
        <tr>
          <td>12</td>
          <td>22</td>
          <td>32</td>
          <td>25</td>
        </tr>
      </tbody>
    </table>
  </li>
</template>

<style scoped lang="scss">
.aptTable{
  table-layout:fixed;
  width:100%;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
  .thubm {
    color: #fff;
    padding: 0;
    background-color: #3f97f6;
  }
}
</style>
