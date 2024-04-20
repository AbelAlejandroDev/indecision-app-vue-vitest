<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button @click="handleCount(+1)">+1</button>
      <button @click="handleCount(-1)">-1</button>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, ref, defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },

  setup(props) {
    const counter = ref(props.value);
    const squareCounter = computed(() => counter.value ** 2);

    const handleCount = (number: number) => {
      if (counter.value + number < 0) return;
      counter.value += number;
    };
    return {
      counter,
      squareCounter,
      handleCount,
    };
  },
});

</script>
