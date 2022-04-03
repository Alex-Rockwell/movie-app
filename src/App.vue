<template>
  <div>
    <Header :titleText="state.titleText"/>
    <main class="main">
      <Search @search="handleSearch"/>
      <h1 class="search-text">search: {{state.search}}</h1>
      <div class="movies">
        <Movie v-for="movie in state.movies" :key="movie.imdbID" :movie="movie"/>
      </div>
    </main>
  </div>
</template>

<script setup>
  import { reactive, ref, toRef } from '@vue/reactivity';
  import { watchEffect } from '@vue/runtime-core';
  import Header from './components/Header.vue';
  import Search from './components/Search.vue';
  import Movie from './components/Movie.vue';

  const API_KEY = 'b92a6bd8'

  const state = reactive({
    search: 'Once Upon',
    loading: true,
    movies: [],
    errorMessage: null,
    titleText: 'Title',
  });


  watchEffect(() => {
    const MOVIE_API_URL = `https://www.omdbapi.com/?s=${state.search}&apikey=${API_KEY}`;

    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        state.movies = jsonResponse.Search;
        state.loading = false;
        // console.log(state.movies)
      });
  });


  function handleSearch(inp) {
    state.search = inp
  }

</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Roboto', sans-serif;
  }
  .main {
    max-width: 1140px;
    margin: auto;
    padding: 0 30px;
  }
  .movies {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
  .search-text {
    margin-left: 25px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
