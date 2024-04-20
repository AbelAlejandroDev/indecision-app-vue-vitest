<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button class="btn" @click="handleCount(+1)">+1</button>
      <button class="btn" @click="handleCount(-1)">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

// Recibir props - js
// const props = defineProps({
//   value: { type: Number, required: true },
// });

// Recibir props -ts
const props = defineProps<{
  value: number;
}>();

const counter = ref(props.value);
const squareCounter = computed(() => counter.value ** 2);

const handleCount = (number: number) => {
  if (counter.value + number < 0) return;
  counter.value += number;
};
</script>

<style scoped>
.btn {
  @apply p-5  bg-blue-500 rounded mr-2 hover:bg-blue-700;
}
</style>
