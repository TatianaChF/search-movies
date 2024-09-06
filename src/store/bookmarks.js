import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useBookmarksStore = defineStore('bookmarksData', () => {
    const bookmarks = ref([]);
    const filteredBookmarks = ref(bookmarks);
    const bookmarksLocalStorage = localStorage.getItem("bookmarksData");

    if (bookmarksLocalStorage) {
        bookmarks.value = JSON.parse(bookmarksLocalStorage)._value;
    }

    const addMovieToBookmarks = (movie) => {
        const assessMovie = bookmarks.value.findIndex(({name: movieName}) => movieName === movie.name);
        if (assessMovie > -1) {
            bookmarks.value.splice(assessMovie, 1);
        } else {
            bookmarks.value.push(movie);
        }
    }

    const clearBookmarks = () => {
        return bookmarks.value.length = 0;
    }

    const sortedBookmarks = (sortName) => {
        switch(sortName) {
            case "году выпуска (по возрастанию)":
                bookmarks.value.sort((a, b) => a.year - b.year);
                break;
            case "году выпуска (по убыванию)":
                bookmarks.value.sort((a, b) => b.year - a.year);
                break;
            case "рейтингу (по возрастанию)":
                bookmarks.value.sort((a, b) => a.rating.kp - b.rating.kp);
                break;
            case "рейтингу (по убыванию)":
                bookmarks.value.sort((a, b) => b.rating.kp - a.rating.kp);
                break;
            case "длительности (по возрастанию)":
                bookmarks.value.sort((a, b) => a.movieLength - b.movieLength);
                break;
            case "длительности (по убыванию)":
                bookmarks.value.sort((a, b) => b.movieLength - a.movieLength);
                break;
            default:
                return bookmarks.value;
        }
    }

    const filtrationBookmarks = (year, rating, lengthMovie) => {
        filteredBookmarks.value = bookmarks.value.filter((movie) => year >= movie.year)
        .filter((movie) => rating >= movie.rating.kp)
        .filter((movie) => lengthMovie >= movie.movieLength);

        console.log(filteredBookmarks.value);
    }

    console.log(filteredBookmarks.value);

    watch(() => bookmarks, (state) => {
        localStorage.setItem("bookmarksData", JSON.stringify(state))
    }, { deep: true })

    return {bookmarks, addMovieToBookmarks, sortedBookmarks, 
            clearBookmarks, filtrationBookmarks, filteredBookmarks}
})