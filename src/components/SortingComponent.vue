<template>
    <b>Сортировать по: </b>
    <v-container>
        <v-list>
            <v-list-item v-for="sort in sortingValue" :key="sort">
                {{ sort.title }}
            </v-list-item>
        </v-list>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';

const sortingValue = [
    {name: "yearASC", sort: "year", title: "по году выпуска (по возрастанию)"},
    {name: "yearDESC", sort: "-year", title: "по году выпуска (по убыванию)"},
    {name: "populASC", sort: "rating", title: "по рейтингу (по возрастанию)"},
    {name: "populDESC", sort: "-rating", title: "по рейтингу (по убыванию)"},
    {name: "lengthASC", sort: "length", title: "по длительности (по возрастанию)"},
    {name: "lengthDESC", sort: "-length", title: "по длительности (по убыванию)"}
];

let isOpen = ref(false);
let currentSortValue = ref()
</script>