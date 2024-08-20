<template>
    <v-container class="container">
        <v-container class="container__card" v-for="movie in moviesStore.movies" :key="movie">
            <router-link :to="movie.name">
                <v-card width="250">
                    <v-img :src="movie.poster.url" 
                            width="250" />
                    <v-card>
                        <h3 class="text">{{movie.name}}</h3>
                    </v-card>
                </v-card>  
            </router-link>
        </v-container>
    </v-container>
</template>

<script setup>
import { useMoviesStore } from "../store/movies";

const moviesStore = useMoviesStore();
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