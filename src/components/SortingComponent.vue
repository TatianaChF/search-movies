<template>
  <v-container>
    <b>Сортировать по: <span @click="isOpen = !isOpen" class="current-value">
      {{ currentSortValue }}
      </span> </b>
    <v-container class="container-list" v-if="isOpen">
      <v-list width="300">
        <v-list-item v-for="sort in sortingValue" :key="sort">
          <p @click="chooseSort(sort)" class="container-list__item">{{ sort }}</p>
        </v-list-item>
      </v-list>
    </v-container>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useBookmarksStore } from "../store/bookmarks";
import { useMoviesStore } from "../store/movies";

const sortingValue = [
  "году выпуска (по возрастанию)",
  "году выпуска (по убыванию)",
  "рейтингу (по возрастанию)",
  "рейтингу (по убыванию)",
  "длительности (по возрастанию)",
  "длительности (по убыванию)"
];

let isOpen = ref(false);
let currentSortValue = ref("нет сортировки");
const moviesStore = useMoviesStore();
const bookmarksStore = useBookmarksStore();

const chooseSort = (sortValue) => {
    currentSortValue.value = sortValue;
    isOpen.value = false;
    moviesStore.sortedMovies(sortValue);
    bookmarksStore.sortedBookmarks(sortValue.name);
}
</script>

<style lang="scss" scoped>
.current-value {
    text-decoration-line: underline;
    cursor: pointer;
}

.container-list {
    position: absolute;
    margin-left: 120px;
    z-index: 2;

    &__item {
        cursor: pointer;
    }
}
</style>
