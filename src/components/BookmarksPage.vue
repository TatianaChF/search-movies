<template>
    <v-container class="container" v-if="bookmarksStore.bookmarks.length > 0">
        <v-container 
        class="container__card"
        v-for="movie in bookmarksStore.bookmarks" 
        :key="movie.id">
          <movie-card :movieData="movie" />
        </v-container>
    </v-container>
    <p v-else>У Вас нет фильмов в закладках</p>
</template>

<script setup>
import { useBookmarksStore } from "../store/bookmarks";
import MovieCard from "./MovieCard.vue";

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
}

.text {
  text-align: center;
}
</style>