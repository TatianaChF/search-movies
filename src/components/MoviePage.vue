<template>
  <v-container class="container-movie">
    <v-card class="container-movie__card" width="1000">
      <v-img :src="movieData.poster.url" width="400" />
      <v-container class="container-movie__text">
        <v-conatiner class="container-movie__name">
          <h1>{{ movieData.name }}</h1>
          <v-btn icon="mdi-file" @click="
            bookmarksStore.addMovieToBookmarks(movieData);
            isAddBookmarks = !isAddBookmarks" 
            :color="changeStyleBtn" />
        </v-conatiner>
        <p v-if="movieData.alternativeName">
          Оригинальное название: {{ movieData.alternativeName }}
        </p>
        <p>Год выпуска: {{ movieData.year }}</p>
        <p>Длительность фильма: {{ movieData.movieLength }} минут</p>
        <p>Рейтинг: {{ movieData.rating.kp }}</p>
        <p>Описание: {{ movieData.description }}</p>
        <v-rating
          hover
          :length="10"
          :size="23"
          :model-value="3"
          active-color="#FFD700"
          v-model="rating"
        />
      </v-container>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import { useRoute } from "vue-router";
import { useMoviesStore } from "../store/movies";
import { useRatingStore } from "../store/rating";
import { useBookmarksStore } from "../store/bookmarks";

const moviesStore = useMoviesStore();
const route = useRoute();
const movieData = moviesStore.movies.find(
  (value) => value.name === route.params.name
);
const ratingStore = useRatingStore();
const bookmarksStore = useBookmarksStore();
const rating = ref(0);
const ratingData = ref({
  nameMovie: movieData.name,
  ratingValue: rating.value,
});
const isAddBookmarks = ref(false);

// цикл для определения оценки фильма (оценивался ли фильм пользователем)
for (let i = 0; i < ratingStore.rating.length; i++) {
  let currentMovie = ratingStore.rating[i];
  if (movieData.name === currentMovie.nameMovie) {
    rating.value = currentMovie.ratingValue;
  }
}

// цикл для определения, добавлен ли фильм в закладки
for (let i = 0; i < bookmarksStore.bookmarks.length; i++) {
  let currentMovie = bookmarksStore.bookmarks[i];
  if (movieData.name === currentMovie.name) {
    isAddBookmarks.value = true;
  }
}

watch(rating, () => {
  ratingData.value.ratingValue = rating.value;
  ratingStore.updateRating(ratingData.value);
});

const changeStyleBtn = computed(() => {
  return isAddBookmarks.value ? "yellow" : "";
})
</script>

<style lang="scss" scoped>
.container-movie {
  &__card {
    display: flex;
    margin: auto;
  }

  &__text {
    text-align: left;
  }

  &__name {
    display: flex;
    justify-content: space-between;
  }
}
</style>
