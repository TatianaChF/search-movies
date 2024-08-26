import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useRatingStore = defineStore("ratingData", () => {
    const rating = ref([]);
    const ratingLocalStorage = localStorage.getItem("ratingData");

    if (ratingLocalStorage) {
        rating.value = JSON.parse(ratingLocalStorage)._value;
    }

    const updateRating = (ratingObj) => {
        const assessMovie = rating.value.findIndex(({nameMovie: movie}) => movie === ratingObj.nameMovie);
        if (assessMovie > -1) {
            rating.value.splice(assessMovie, 1);
            rating.value.push(ratingObj);
        } else {
            rating.value.push(ratingObj);
        }
    }

    watch(() => rating, (state) => {    
        localStorage.setItem("ratingData", JSON.stringify(state))
    }, { deep: true })


    return {rating, updateRating}
})