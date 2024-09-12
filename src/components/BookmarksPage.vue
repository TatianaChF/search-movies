<template>
  <v-container class="sort">
    <v-container class="sort__filter" width="800">
      <v-container>
        <v-btn
          @click="isFilterOpen = !isFilterOpen"
          icon="mdi-filter"
          variant="text"
        />
        <filtration-component
          v-if="isFilterOpen"
          @change-filter-open="isFilterOpen = false"
        />
      </v-container>
      <sorting-component class="sort__component" />
    </v-container>
    <v-btn icon="mdi-delete" @click="bookmarksStore.clearBookmarks()"></v-btn>
  </v-container>
  <v-container class="container" v-if="bookmarksStore.bookmarks.length > 0">
    <v-container
      class="container__card"
      v-for="movie in bookmarksStore.filteredBookmarks"
      :key="movie.id"
    >
      <movie-card :movieData="movie" />
    </v-container>
  </v-container>
  <h2 class="text" v-else>У Вас нет фильмов в закладках</h2>
</template>

<script setup>
import { useBookmarksStore } from "../store/bookmarks";
import MovieCard from "./MovieCard.vue";
import SortingComponent from "./SortingComponent.vue";
import FiltrationComponent from "./FiltrationComponent.vue";
import { ref } from "vue";

const isFilterOpen = ref(false);
const bookmarksStore = useBookmarksStore();

defineProps({
  movieData: Object,
});
</script>

<style lang="scss" scoped>
@import "./../assets/style.scss";
</style>
