<template>
    <v-container v-for="movie in moviesList" :key="movie">
        <v-card width="350" height="700">
            <v-img :src="movie.poster.url" />
            <v-card>
                {{movie.name}}
            </v-card>
        </v-card>
    </v-container>
</template>

<script setup>
import { onMounted, ref } from "vue";
import moviesData from "./../api/kinopoisk-1.json"

const moviesList = ref(moviesData.docs);

console.log(moviesList.value);
</script>