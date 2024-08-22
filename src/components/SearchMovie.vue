<template>
  <v-responsive max-width="700">
    <v-text-field
      label="Найти фильм"
      append-inner-icon="mdi-magnify"
      variant="underlined"
      v-model="searchValue"
    />
  </v-responsive>
</template>

<script setup>
import { ref, watch } from "vue";

const searchValue = ref("");

watch(searchValue, () => {
    console.log(searchValue.value)
})
</script>
