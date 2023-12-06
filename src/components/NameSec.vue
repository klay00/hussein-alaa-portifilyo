<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue';

const changeFont = ref(false);

const startTimeout = () => {
  changeFont.value = true;
  setTimeout(() => {
    changeFont.value = !changeFont.value;
  }, 500);
};

const intervalId = setInterval(() => {
  startTimeout();
  console.log(changeFont.value);
}, 500);

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <div class="">
    <h1 class=""><span class="font-old">I A</span>M</h1>
    <h1 class="">
      <span>H</span>
      <span :class="changeFont.value ? 'font-old' : ''">US</span>
      <span>S</span>
      <span class="font-old">EIN</span>
      <span>{{ ' ' }}A</span>
      <span class="font-old">LAA</span>
    </h1>
  </div>
</template>
