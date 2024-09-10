<template>
  <v-container v-if="recommendedMovies.length > 0">
    <h3>Рекоммендуем посмотреть</h3>
    <v-container v-for="movie in recommendedMovies" :key="movie">
        <movie-card :movieData="movie" />
    </v-container>
  </v-container>
</template>

<script setup>
import { useMoviesStore } from "../store/movies";
import MovieCard from "./MovieCard.vue";

const props = defineProps(["movie", "movieData"]);
const moviesStore = useMoviesStore();
const recommendedMovies = [];


// цикл поиска альтернативных фильмов
for (let i = 0; i < moviesStore.movies.length; i++) {
    const currentMovie = moviesStore.movies[i];

    if (currentMovie.type === props.movie.type 
        && currentMovie.name != props.movie.name 
        && typeof currentMovie.alternativeName == typeof props.movie.alternativeName) {
        recommendedMovies.push(currentMovie)
    }

    if (recommendedMovies.length == 4) break;
}
</script>