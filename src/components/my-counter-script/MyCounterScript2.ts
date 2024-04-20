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
