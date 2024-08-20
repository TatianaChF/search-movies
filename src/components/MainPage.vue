<template>
    <v-container v-for="movie in moviesList" :key="movie">
        <v-card width="250">
            <v-img :src="movie.poster.url" width="250" />
            <v-card>
                <h3 class="text">{{movie.name}}</h3>
            </v-card>
        </v-card>
    </v-container>
</template>

<script setup>
import { onMounted, ref } from "vue";
import moviesData from "./../api/kinopoisk-1.json"

const moviesList = ref(moviesData.docs);
</script>

<style lang="scss" scoped>
.text {
    text-align: center;
}
</style>