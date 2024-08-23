<template>
    <router-link :to="props.movieData.name" class="container__card__router">
        <v-card width="250">
          <v-img :src="props.movieData.poster.previewUrl" width="250" />
          <v-card class="text">
            <h3>{{ props.movieData.name }}</h3>
            <p>{{ props.movieData.year }}, {{ props.movieData.rating.kp }}</p>
          </v-card>
        </v-card>
    </router-link>
</template>

<script setup>
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
</style>