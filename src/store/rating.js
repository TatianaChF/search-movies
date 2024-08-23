import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useRatingStore = defineStore("ratingData", () => {
    const rating = ref([]);
    const ratingLocalStorage = localStorage.getItem("ratingData");

    if (ratingLocalStorage) {
        rating.value.ratingValue = JSON.parse(ratingLocalStorage)._value.ratingValue;
    }

    const getMovieName = (name, ratingValue) => {
        rating.value.push({
            movieName: name,
            ratingValue: ratingValue
        })
    }

    const updateRating = (ratingObj) => {
        rating.value.push(ratingObj);
        console.log(rating.value);
        console.log(ratingObj)
    }

    watch(() => rating, (state) => {
        localStorage.setItem("ratingData", JSON.stringify(state))
    }, { deep: true })


    return {rating, getMovieName, updateRating}
})