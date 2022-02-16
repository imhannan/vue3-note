<script setup>
import ColorButton from "./ColorButton.vue";
import { computed } from "vue";
import { useNoteStore } from "../stores/note";
const store = useNoteStore();

const colors = computed(() => store.colors);
const notes = computed(() => store.notes);
const colorCount = store.getColorCount;

function select(color) {
  if (color) {
    store.setFilterColor(color);
  } else {
    store.setFilterColor();
  }
}
</script>
<template>
  <div
    class="mx-auto flex max-w-[80%] items-center justify-center space-x-2 rounded-md bg-white p-2 md:space-x-4 md:p-4"
  >
    <button @click="select('')" class="btn btn-primary">
      All ({{ notes.length }})
    </button>
    <color-button
      v-for="color in colors"
      :key="color"
      :color="color"
      @selected="select"
      >{{ colorCount(color) }}</color-button
    >
  </div>
</template>
<style scoped></style>
