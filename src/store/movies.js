import { defineStore } from "pinia";
import { ref } from "vue";
import moviesData from "./../api/kinopoisk-1.json";

export const useMoviesStore = defineStore('moviesData', () => {
    const movies = ref(moviesData.docs);

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
        movies.value = movies.value.filter((movie) => {
            return movie.name.toLowerCase().includes(movieName);
        })
    }

    return {movies, sortedMovies, searchMovie}
})