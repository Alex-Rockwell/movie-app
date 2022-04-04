<template>
  <form class="search" @submit.prevent="$emit('search', searchInput)">
    <input type="text" placeholder="Search..." v-model="searchInput">
    <input  type="submit"  value="Search"/>
  </form>
</template>

<script setup>
  import { ref } from "@vue/reactivity";

  const searchInput = ref('')

</script>

<style scoped>
  .search {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
  }


  input[type="submit"] {
    padding: 5px;
    background-color: transparent;
    color: black;
    border: 1px solid black;
    width: 80px;
    margin-left: 5px;
    cursor: pointer;
  }


  input[type="submit"]:hover {
    background-color: #282c34;
    color: antiquewhite;
  }


  .search > input[type="text"]{
    width: 40%;
    min-width: 170px;
    padding: 10px;
  }
</style>