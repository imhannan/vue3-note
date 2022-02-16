<script setup>
import NoteAdd from "./components/NoteAdd.vue";
import NoteFilter from "./components/NoteFilter.vue";
import NoteList from "./components/NoteList.vue";
</script>

<template>
  <header
    class="py-2 text-center text-xl font-bold text-white sm:text-2xl md:py-4 md:text-3xl lg:text-4xl"
  >
    Vue 3 note app
  </header>

  <main
    class="mb-4 flex flex-col space-y-2 sm:mb-6 md:mb-8 md:space-y-4 lg:mb-10"
  >
    <note-add />
    <note-filter />
    <note-list />
  </main>
</template>

<style></style>
