import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";
import moviesData from "./../api/kinopoisk-1.json";

export const useMoviesStore = defineStore('moviesData', () => {
    const movies = ref([]);
    const totalMovies = ref(100);
    const currentPage = ref(1);
    const pageSize = ref(25);
    const lengthPagination = ref(0);

    const getMovieData = async () => {
        const response = await axios.get(`http://localhost:3000/docs`);
        movies.value = response?.data;
        lengthPagination.value = Math.round(totalMovies.value / pageSize.value);
    }

    const displayedMovies = computed(() => {
        const startIndex = (currentPage.value - 1) * pageSize.value;
        const endIndex = startIndex + pageSize.value;

        return movies.value.slice(startIndex, endIndex);
    })

    const sortedMovies = (sortName) => {
        switch(sortName) {
            case "yearASC":
                movies.value.sort((a, b) => a.year - b.year);
                break;
            case "yearDESC":
                movies.value.sort((a, b) => b.year - a.year);
                break;
            case "populASC":
                movies.value.sort((a, b) => a.rating.kp - b.rating.kp);
                break;
            case "populDESC":
                movies.value.sort((a, b) => b.rating.kp - a.rating.kp);
                break;
            case "lengthASC":
                movies.value.sort((a, b) => a.movieLength - b.movieLength);
                break;
            case "lengthDESC":
                movies.value.sort((a, b) => b.movieLength - a.movieLength);
                break;
            default:
                return movies.value;
        }
    }

    const searchMovie = (movieName) => {
        movies.value = moviesData.docs;

        movies.value = movies.value.filter((movie) => {
            return movie.name.toLowerCase().includes(movieName);
        })
    }

    return {movies, displayedMovies, sortedMovies, searchMovie, getMovieData, currentPage, lengthPagination, pageSize}
})