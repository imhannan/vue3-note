<script setup>
defineProps(["modelValue", "color"]);
defineEmits(["update:modelValue"]);
</script>
<template>
  <input
    name="color"
    :value="modelValue"
    @input="$emit('update:modelValue', color)"
    type="radio"
    class="r-btn color relative h-4 w-4 border-0 checked:outline-none focus:ring-0 md:h-8 md:w-8"
  />
</template>
<style scoped>
.color::after {
  background-color: v-bind(color);
}

.r-btn {
  @apply after:absolute after:left-0 after:right-0 after:top-0 after:h-4 after:w-4 after:rounded-full after:duration-300 checked:after:ring-2 checked:after:ring-gray-400 after:hover:border-2 after:hover:border-gray-300 after:active:border-0 after:md:h-8 after:md:w-8;
}
</style>
