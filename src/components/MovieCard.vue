<template>
    <router-link :to="props.movieData.name" class="container__card__router">
        <v-card width="250" 
        @mouseenter="isMouseEnter = true" 
        @mouseleave="isMouseEnter = false">
          <v-img :src="props.movieData.poster.previewUrl" width="250" />
          <v-card class="text">
            <h3>{{ props.movieData.name }}</h3>
            <p class="title">{{ props.movieData.year }}г, 
              <v-icon icon="mdi-star" color="#FFD700" size="20"></v-icon>
              {{ props.movieData.rating.kp }}
            </p>
            <p v-if="isMouseEnter">Mouse!</p>
          </v-card>
        </v-card>
    </router-link>
</template>

<script setup>
import { ref } from "vue";

const isMouseEnter = ref(false);
const props = defineProps(["movieData"]);
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

.title {
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 2px;
}
</style>