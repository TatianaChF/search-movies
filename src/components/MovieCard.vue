<template>
        <v-card 
        width="250" 
        @click="router.push(`/${props.movieData.name}`)"
        @mouseenter="isMouseEnter = true" 
        @mouseleave="isMouseEnter = false">
          <v-img 
            :src="props.movieData.poster.previewUrl" 
            width="250" />
          <v-card class="text">
            <h3>{{ props.movieData.name }}</h3>
            <p class="title">{{ props.movieData.year }}г, 
              <v-icon 
                icon="mdi-star" 
                color="#FFD700" 
                size="20" />
              {{ props.movieData.rating.kp }}
            </p>
            <v-container 
              class="text__extended"
              v-if="isMouseEnter">
              <p>{{ props.movieData.shortDescription }}</p>
              <p><b>{{ textBookmarks }}</b></p>
            </v-container>
          </v-card>
        </v-card>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useBookmarksStore } from "../store/bookmarks";

const isMouseEnter = ref(false);
const textBookmarks = ref("нет в закладках")
const bookmarksStore = useBookmarksStore();
const router = useRouter();
const props = defineProps(["movieData"]);

for (let i = 0; i < bookmarksStore.bookmarks.length; i++) {
  let currentMovie = bookmarksStore.bookmarks[i];
  if (props.movieData.name === currentMovie.name) {
    textBookmarks.value = "в закладках";
  }
}
</script>

<style lang="scss" scoped>
@import "./../assets/style.scss";
</style>