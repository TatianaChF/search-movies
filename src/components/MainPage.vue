<template>
    <v-container class="container">
        <v-container class="container__card" v-for="movie in moviesList" :key="movie">
            <v-card width="250">
                <v-img :src="movie.poster.url" 
                        width="250" />
                <v-card>
                    <h3 class="text">{{movie.name}}</h3>
                </v-card>
            </v-card>
        </v-container>
    </v-container>
</template>

<script setup>
import { onMounted, ref } from "vue";
import moviesData from "./../api/kinopoisk-1.json"

const moviesList = ref(moviesData.docs);
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-wrap: wrap;

    &__card {
        flex: 250px;
    }
}

.text {
    text-align: center;
}
</style>