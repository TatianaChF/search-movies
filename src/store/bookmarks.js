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

    watch(() => bookmarks, (state) => {
        localStorage.setItem("bookmarksData", JSON.stringify(state))
    }, { deep: true })

    return {bookmarks, addMovieToBookmarks}
})