<script setup>
import { computed, reactive } from "vue";
import InputColor from "./InputColor.vue";
import { useNoteStore } from "../stores/note";
const store = useNoteStore();

const colors = computed(() => store.colors);

const note = reactive({
  title: "",
  desc: "",
  color: "",
});

const addNote = function () {
  if (note.title && note.desc && note.color) {
    const newNote = {
      ...note,
      id: Date.now(),
      time: new Date(),
    };

    store.addNote(newNote);
    note.title = "";
    note.desc = "";
  } else {
    alert("Please fill in all fields");
  }
};
</script>
<template>
  <form
    @submit.prevent="addNote"
    class="mx-auto flex max-w-[80%] flex-col space-y-4 rounded-md bg-white p-2 drop-shadow-md md:max-w-[60%] md:space-y-8 md:p-4"
  >
    <input
      type="text"
      class="form-control"
      placeholder="Title"
      v-model="note.title"
    />
    <textarea
      class="form-control"
      placeholder="Description"
      spellcheck="false"
      v-model="note.desc"
    ></textarea>
    <div class="flex items-center justify-between space-x-2 md:space-x-4">
      <div class="flex space-x-4" v-for="color in colors" :key="color">
        <input-color v-model="note.color" :color="color" />
      </div>
      <button
        type="submit"
        class="rounded-md bg-primary p-2 text-white hover:bg-green-400 md:p-4"
      >
        Add Note
      </button>
    </div>
  </form>
</template>
