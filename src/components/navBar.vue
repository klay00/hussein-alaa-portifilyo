<script setup lang="ts">
import { ref, watchEffect } from 'vue';

const count = ref(1);

const updateCount = () => {
  count.value = (count.value + 1) % 13;
  setTimeout(updateCount, 500);
};

watchEffect(() => {
  updateCount();
});
</script>

<template>
  <div class="h-[8vh] px-20 flex justify-center items-center border-solid border-b-2 border-white">
    <a href="/" class="text-xl">
      <template v-for="(char, i) in ['H', 'U', 'S', 'S', 'E', 'I', 'N', ' ', 'A', 'L', 'A', 'A']" :key="char">
        <span>{{ count.value - 1 === i ? '@' : char }}</span>
      </template>
    </a>
  </div>
</template>