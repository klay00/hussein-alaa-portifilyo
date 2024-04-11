<template>
  <RouterLink :to="'/projects/' + id" class="card-link ">
    <div class="card">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="card-inner">
        <img src="https://via.placeholder.com/240x240" alt="Image" class="card-image">
        <h2 class="card-title">{{ title }}</h2>
        <p class="card-description">{{ description }}</p>
      </div>
    </div>
  </RouterLink >
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
interface Props{
  id: Number,
  title: String,
  description: String,
  src:String
}
const props = defineProps<Props>();
</script>

<style scoped>
.card {
  width: 100%;
  max-width: 450px; /* Optional: set a max-width for larger screens */
  height: auto; /* This will make the card responsive in height as well */
  transition: all 0.2s;
  position: relative;
  cursor: pointer;
  margin-bottom: 20px; /* Optional: Add margin for spacing between cards */
}

.card-inner {
    width: inherit;
    height: inherit;
    background: rgba(255,255,255,.05);
    box-shadow: 0 0 10px rgba(0,0,0,0.25);
    backdrop-filter: blur(10px);
    border-radius: 8px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card:hover {
    transform: scale(1.04) rotate(1deg);
}

.card-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

.card-title {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 10px;
}

.card-description {
    font-size: 14px;
    color: #ccc;
    line-height: 1.5;
}
  
.circle {
    width: 100px;
    height: 100px;
    background: radial-gradient(#e64b3397, #c61b1b);
    border-radius: 50%;
    position: absolute;
    animation: move-up6 2s ease-in infinite alternate-reverse;
}

.circle:nth-child(1) {
    top: -25px;
    left: -25px;
}

.circle:nth-child(2) {
    bottom: -25px;
    right: -25px;
    animation-name: move-down1;
}

@keyframes move-up6 {
    to {
      transform: translateY(-10px);
    }
}

@keyframes move-down1 {
    to {
      transform: translateY(10px);
    }
}
</style>
