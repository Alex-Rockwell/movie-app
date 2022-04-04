import { reactive, watchEffect } from "vue"
const API_KEY = 'b92a6bd8'

export const useMovieApi = () => {
  const state = reactive({
    search: 'Once Upon',
    loading: true,
    movies: [],
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

  return state
}