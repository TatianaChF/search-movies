<template>
  <sorting-component />
  <v-container class="container">
    <v-container
      class="container__card"
      v-for="movie in moviesStore.movies"
      :key="movie"
    >
      <movie-card :movieData="movie" />
    </v-container>
  </v-container>
</template>

<script setup>
import { useMoviesStore } from "../store/movies";
import SortingComponent from "./SortingComponent.vue";
import MovieCard from "./MovieCard.vue";

const moviesStore = useMoviesStore();

defineProps({
    movieData: Object
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;

  &__card {
    flex: 250px;

    &__router {
      text-decoration: none;
    }
  }
}

.text {
  text-align: center;
}
</style>
