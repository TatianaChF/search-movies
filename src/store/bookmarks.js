import { defineStore } from "pinia";
import { ref } from "vue";

export const useBookmarksStore = defineStore('bookmarksData', () => {
    const bookmarks = ref([]);

    const addMovieToBookmarks = (movie) => {
        bookmarks.value.push(movie);
    }

    return {bookmarks, addMovieToBookmarks}
})