<script setup>
import NoteSingle from "./NoteSingle.vue";
import { useNoteStore } from "../stores/note";

import { computed } from "vue";
const store = useNoteStore();

const notes = computed(() => store.filteredNotes);

function removeNote(id) {
  if (confirm("Are you sure you want to delete this note?")) {
    store.removeNote(id);
  }
}
</script>
<template>
  <div
    v-if="notes.length"
    class="m-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:m-4 md:grid-cols-3 md:gap-4 lg:grid-cols-4"
  >
    <note-single
      v-for="note in notes"
      :key="note.id"
      :note="note"
      @remove="removeNote"
    />
  </div>
  <div
    class="mx-auto flex max-w-[80%] flex-col space-y-4 rounded-md bg-white p-2 md:max-w-[60%] md:space-y-8 md:p-4"
    v-else
  >
    <p class="text-center text-gray-500">No notes yet</p>
  </div>
</template>
<style scoped></style>
