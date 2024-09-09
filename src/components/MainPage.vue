<template>
  <v-container class="container__sort">
    <v-btn 
      @click="isFilterOpen = !isFilterOpen" 
      icon="mdi-filter" 
      variant="text" />
    <filtration-component v-if="isFilterOpen" @change-filter-open="isFilterOpen = false" />
    <sorting-component />
  </v-container>
  <v-container class="container">
    <v-container
      class="container__card"
      v-for="movie in moviesStore.displayedMovies"
      :key="movie"
    >
      <movie-card :movieData="movie" />
    </v-container>
  </v-container>
  <v-pagination
      v-model="moviesStore.currentPage"
      :length="moviesStore.lengthPagination"
      rounded="circle"
      @click="moviesStore.getMovieData()"
  ></v-pagination>
</template>

<script setup>
import { useMoviesStore } from "../store/movies";
import SortingComponent from "./SortingComponent.vue";
import FiltrationComponent from './FiltrationComponent.vue';
import MovieCard from "./MovieCard.vue";
import { ref, onBeforeMount } from "vue";

const moviesStore = useMoviesStore();
const isFilterOpen = ref(false)

defineProps({
    movieData: Object
})

onBeforeMount(() => {
  moviesStore.getMovieData();
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

  &__sort {
      display: flex;
  }
}

.text {
  text-align: center;
}
</style>
