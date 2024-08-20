import { defineStore } from "pinia";
import { ref } from "vue";
import moviesData from "./../api/kinopoisk-1.json";

export const useMoviesStore = defineStore('moviesData', () => {
    const movies = ref(moviesData.docs);

    return {movies}
})