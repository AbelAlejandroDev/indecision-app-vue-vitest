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

<script lang="ts" src="./MyCounterScript2.js"></script>