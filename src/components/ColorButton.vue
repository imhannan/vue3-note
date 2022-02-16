<script setup>
const props = defineProps({
  color: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(["selected"]);

const selectColor = function () {
  emit("selected", props.color);
};
</script>
<template>
  <button @click="selectColor" class="btn btn-color">
    <slot>0</slot>
  </button>
</template>
<style scoped>
.btn-color {
  background-color: v-bind(color);
  color: white;
}
</style>
