import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useRatingStore = defineStore("ratingData", () => {
    const rating = ref({
        ratingValue: 1
    });
    const ratingLocalStorage = localStorage.getItem("ratingData");

    if(ratingLocalStorage) {
        rating.value.ratingValue = JSON.parse(ratingLocalStorage)._value.ratingValue;
    }

    watch(() => rating, (state) => {
        console.log(rating.value)
        localStorage.setItem("ratingData", JSON.stringify(state))
    }, { deep: true })

    return {rating}
})