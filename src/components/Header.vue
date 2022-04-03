<template>
  <header class="header">
    <h2 class="header__title">{{ titleText }}</h2>
  </header>
</template>

<script setup>
defineProps({titleText: String})

</script>

<style scoped>
  .header {
    background-color: #282c34;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 20px;
    cursor: pointer;
  }
  .header__title {
    font-size: 40px;
    font-weight: 400;
    color: white;
  }
</style>