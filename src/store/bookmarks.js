import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useBookmarksStore = defineStore('bookmarksData', () => {
    const bookmarks = ref([]);
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
            case "yearASC":
                bookmarks.value.sort((a, b) => a.year - b.year);
                break;
            case "yearDESC":
                bookmarks.value.sort((a, b) => b.year - a.year);
                break;
            case "populASC":
                bookmarks.value.sort((a, b) => a.rating.kp - b.rating.kp);
                break;
            case "populDESC":
                bookmarks.value.sort((a, b) => b.rating.kp - a.rating.kp);
                break;
            case "lengthASC":
                bookmarks.value.sort((a, b) => a.movieLength - b.movieLength);
                break;
            case "lengthDESC":
                bookmarks.value.sort((a, b) => b.movieLength - a.movieLength);
                break;
            default:
                return movies.value;
        }
    }

    watch(() => bookmarks, (state) => {
        localStorage.setItem("bookmarksData", JSON.stringify(state))
    }, { deep: true })

    return {bookmarks, addMovieToBookmarks, sortedBookmarks, clearBookmarks}
})