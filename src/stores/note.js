import { defineStore } from "pinia";

export const useNoteStore = defineStore({
  id: "note",
  state: () => ({
    notes: [],
    filterColor: "",
    colors: [
      "red",
      "green",
      "blue",
      "yellow",
      "orange",
      "purple",
      "pink",
      "brown",
      "black",
      "white",
    ],
  }),
  getters: {
    getColorCount: (state) => {
      return (color) => {
        return state.notes.filter((note) => note.color === color).length;
      };
    },
    filteredNotes: (state) => {
      if (state.filterColor === "") return state.notes;
      return state.notes.filter((note) => note.color === state.filterColor);
    },
  },
  actions: {
    addNote(note) {
      if (typeof note === "object") {
        this.notes.push(note);
      }
    },
    setFilterColor(color) {
      if (color) {
        this.filterColor = color;
      } else {
        this.filterColor = "";
      }
    },
    removeNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },
  },
});
