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
import SortingComponent from "./../components/SortingComponent.vue";
import FiltrationComponent from './../components/FiltrationComponent.vue';
import MovieCard from "./../components/MovieCard.vue";
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
@import "./../assets/style.scss";
</style>
