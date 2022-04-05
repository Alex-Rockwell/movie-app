<template>
  <div class="movie">
    <h2 class="movie__title">{{movie.Title}}</h2>
    <div>
      <img class="img" :alt="altText" :src="movie.Poster" />
    </div>
    <p>{{ movie.Year }}</p>
  </div>
</template>

<script setup>
  import { computed, onMounted, ref } from "@vue/runtime-core"

  const props = defineProps(['movie'])
  const altText = computed(() => `The movie titled: ${props.movie.Title}`)

</script>

<style lang="scss" scoped>
  .movie {
    padding: 5px 25px 10px 25px;
    max-width: 300px;
    min-height: 400px;

    @media screen and (max-width: 555px) {
      max-width: 100vw;
    }
  }
  .movie__title {
    padding: 5px;
    padding-left: 0;
    font-size: 18px;
    height: 55px;
  }

  .img {
    width: 100%;
  }
</style>