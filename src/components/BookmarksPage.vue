<template>
    <v-container class="container__sort" width="880">
      <v-container class="container__sort__filter" width="800">
        <v-container>
        <v-btn 
          @click="isFilterOpen = !isFilterOpen" 
          icon="mdi-filter" 
          variant="text" />
        <filtration-component v-if="isFilterOpen" />
        </v-container>
        <sorting-component />
      </v-container>
      <v-btn icon="mdi-delete" @click="bookmarksStore.clearBookmarks()"></v-btn>
    </v-container>
    <v-container class="container" v-if="bookmarksStore.bookmarks.length > 0">
      <v-container 
        class="container__card"
        v-for="movie in bookmarksStore.bookmarks" 
        :key="movie.id">
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

  &__sort {
    display: flex;

    &__filter {
      display: flex;
      justify-content: flex-start;
      margin-right: 400px;
    }
  }
}

.text {
  text-align: center;
}
</style>