<template>
  <div class="movie">
    <h2>{{movie.Title}}</h2>
    <div>
      <img width="200" :alt="altText" :src="movie.Poster" />
    </div>
    <p>{{ movie.Year }}</p>
  </div>
</template>

<script setup>
  import { computed, onMounted, ref } from "@vue/runtime-core"

  const props = defineProps(['movie'])
  const altText = computed(() => `The movie titled: ${props.movie.Title}`)

</script>

<style scoped>
  .movie {
    padding: 5px 25px 10px 25px;
    max-width: 250px;
  }
</style>