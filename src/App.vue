<template>
  <div :class="mode">
    <Header :titleText="'Movie App'" />
    <main class="main">
      <Search @search="handleSearch" :currentSearch="state.search" />
      <h1 class="search-text">search: {{ state.search }}</h1>
      <div class="movies">
        <Movie
          v-for="movie in state.movies"
          :key="movie.imdbID"
          :movie="movie"
        />
      </div>
    </main>
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Search from "./components/Search.vue";
import Movie from "./components/Movie.vue";
import { useMovieApi } from "./hooks/useMovieApi";
import { useTheme } from "./stores/useStore";
import { storeToRefs } from "pinia";
// import { onMounted } from "vue-demi";

const state = useMovieApi();

function handleSearch(inp) {
  state.loading = true;
  state.search = inp;
}

const store = useTheme();
const { mode } = storeToRefs(store);
// const { keyPress } = store;

// onMounted(() => {
//   window.addEventListener("keyup", keyPress);
// });
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Roboto", sans-serif;
}
.main {
  max-width: 1140px;
  margin: auto;
  padding: 0 30px;
}
.movies {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 555px) {
    grid-template-columns: repeat(1, 100%);
  }
}
.search-text {
  margin-left: 25px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.dark {
  background-color: #30373f;
  color: #f3f3f3;
}
</style>
