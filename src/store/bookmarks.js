import { defineStore } from "pinia";
import { ref } from "vue";

export const useBookmarksStore = defineStore('bookmarksData', () => {
    const bookmarks = ref([]);

    const addMovieToBookmarks = (movie) => {
        const assessMovie = bookmarks.value.findIndex(({name: movieName}) => movieName === movie.name);
        if (assessMovie > -1) {
            bookmarks.value.splice(assessMovie, 1);
        } else {
            bookmarks.value.push(movie);
        }
    }

    return {bookmarks, addMovieToBookmarks}
})