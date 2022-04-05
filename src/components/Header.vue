<template>
  <header class="header">
    <div class="container">
      <h2 class="header__title">{{ titleText }}</h2>
      <Toggler/>
    </div>
  </header>
</template>

<script setup>
import Toggler from './Toggler.vue';
defineProps({titleText: String})

</script>

<style scoped>
  .header {
    background-color: #282c34;
  }
  .container {
    max-width: 1140px;
    margin: auto;
    padding: 0 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 70px;
    padding: 50px 30px;
  }
  .header__title {
    font-size: 40px;
    font-weight: 400;
    color: white;
    flex-basis: 90%;
    text-align: center;
  }
</style>