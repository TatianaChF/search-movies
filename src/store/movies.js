import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";
import axios from "axios";
import moviesData from "./../api/kinopoisk-1.json";

export const useMoviesStore = defineStore('moviesData', () => {
    const movies = ref([]);
    const filteredMovies = ref([]);
    const totalMovies = ref(100);
    const currentPage = ref(1);
    const pageSize = ref(25);
    const lengthPagination = ref(0);
    const currentSortValue = ref("нет сортировки");
    const sortLocalStorage = localStorage.getItem("sortData");
    const moviesLocalStorage = localStorage.getItem("moviesData");

    if (sortLocalStorage) {
        currentSortValue.value = JSON.parse(sortLocalStorage)._value;
    }

    if (moviesLocalStorage) {
        filteredMovies.value = JSON.parse(moviesLocalStorage)._value;
    }

    watch(() => currentSortValue, (state) => {
        localStorage.setItem("sortData", JSON.stringify(state))
        sortedMovies(currentSortValue.value)
    }, { deep: true })

    watch(() => filteredMovies, (state) => {
        localStorage.setItem("moviesData", JSON.stringify(state))
    }, { deep: true })

    const getMovieData = async () => {
        if (movies.value.length === 0) {
            const response = await axios.get(`http://localhost:3000/docs`);
            movies.value = response?.data;
            filteredMovies.value = response?.data;
        }

        lengthPagination.value = Math.round(totalMovies.value / pageSize.value);
    }

    const displayedMovies = computed(() => {
        const startIndex = (currentPage.value - 1) * pageSize.value;
        const endIndex = startIndex + pageSize.value;

        return filteredMovies.value.slice(startIndex, endIndex);
    })

    const sortedMovies = (sortName) => {
        switch(sortName) {
            case "году выпуска (по возрастанию)":
                filteredMovies.value = filteredMovies.value.sort((a, b) => a.year - b.year);
                currentSortValue.value = "году выпуска (по возрастанию)";
                break;
            case "году выпуска (по убыванию)":
                filteredMovies.value = filteredMovies.value.sort((a, b) => b.year - a.year);
                currentSortValue.value = "году выпуска (по убыванию)";
                break;
            case "рейтингу (по возрастанию)":
                filteredMovies.value = filteredMovies.value.sort((a, b) => a.rating.kp - b.rating.kp);
                currentSortValue.value = "рейтингу (по возрастанию)";
                break;
            case "рейтингу (по убыванию)":
                filteredMovies.value = filteredMovies.value.sort((a, b) => b.rating.kp - a.rating.kp);
                currentSortValue.value = "рейтингу (по убыванию)";
                break;
            case "длительности (по возрастанию)":
                filteredMovies.value = filteredMovies.value.sort((a, b) => a.movieLength - b.movieLength);
                currentSortValue.value = "длительности (по возрастанию)";
                break;
            case "длительности (по убыванию)":
                filteredMovies.value = filteredMovies.value.sort((a, b) => b.movieLength - a.movieLength);
                currentSortValue.value = "длительности (по убыванию)";
                break;
            default:
                return movies.value;
        }
    }

    const filtartionMovies = (filterYear, filterRating, filterLength) => {
        filteredMovies.value = movies.value.filter((movie) => filterYear >= movie.year)
        .filter((movie) => filterRating >= movie.rating.kp)
        .filter((movie) => filterLength >= movie.movieLength);

        console.log(movies.value);
        console.log(filteredMovies.value);
    }

    const searchMovie = (movieName) => {
        movies.value = moviesData.docs;

        movies.value = movies.value.filter((movie) => {
            return movie.name.toLowerCase().includes(movieName);
        })
    }

    return {movies, displayedMovies, currentSortValue, 
            sortedMovies, searchMovie, getMovieData, 
            currentPage, lengthPagination, pageSize, 
            filtartionMovies, filteredMovies}
})