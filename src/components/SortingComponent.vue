<template>
  <v-container>
    <b
      >Сортировать по:
      <span @click="isOpen = !isOpen" class="current-value">
        {{ moviesStore.currentSortValue }}
      </span>
    </b>
    <v-container class="container-list" v-if="isOpen">
      <v-list width="300">
        <v-list-item v-for="sort in sortingValue" :key="sort">
          <p @click="chooseSort(sort)" class="container-list__item">
            {{ sort }}
          </p>
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
const moviesStore = useMoviesStore();
const bookmarksStore = useBookmarksStore();

const chooseSort = (sortValue) => {
  moviesStore.currentSortValue = sortValue;
  isOpen.value = false;
  moviesStore.sortedMovies(sortValue);
  bookmarksStore.sortedBookmarks(sortValue);
};
</script>

<style lang="scss" scoped>
@import "./../assets/style.scss";
</style>
