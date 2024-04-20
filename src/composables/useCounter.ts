import { computed, ref } from 'vue';

export const useCounter = (initialValue: number) => {
  const counter = ref(initialValue);

  const handleCount = (number: number) => {
    if (counter.value + number < 0) return;
    counter.value += number;
  };

  return {
    // state
    counter,
    // read-only
    squareCounter: computed(() => counter.value ** 2),

    // actions
    handleCount,
  };
};
