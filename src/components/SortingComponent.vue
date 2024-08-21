<template>
  <v-container>
    <b>Сортировать по: <span @click="isOpen = !isOpen">{{ currentSortValue.title }}</span> </b>
    <v-container class="container-list" v-if="isOpen">
      <v-list width="300">
        <v-list-item v-for="sort in sortingValue" :key="sort">
          {{ sort.title }}
        </v-list-item>
      </v-list>
    </v-container>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const sortingValue = [
  { name: "yearASC", sort: "year", title: "по году выпуска (по возрастанию)" },
  { name: "yearDESC", sort: "-year", title: "по году выпуска (по убыванию)" },
  { name: "populASC", sort: "rating", title: "по рейтингу (по возрастанию)" },
  { name: "populDESC", sort: "-rating", title: "по рейтингу (по убыванию)" },
  {
    name: "lengthASC",
    sort: "length",
    title: "по длительности (по возрастанию)",
  },
  {
    name: "lengthDESC",
    sort: "-length",
    title: "по длительности (по убыванию)",
  },
];

let isOpen = ref(false);
let currentSortValue = ref({
  name: "yearASC",
  sort: "year",
  title: "по году выпуска (по возрастанию)",
});
</script>

<style lang="scss" scoped>
.container-list {
    position: absolute;
    margin-left: 120px;
    z-index: 2;
}
</style>
