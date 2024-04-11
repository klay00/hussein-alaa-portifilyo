<script setup lang="ts">
import { defineProps } from 'vue';
 interface Props{
  id: Number,
  title: String,
  description: String,
  src:String
  path?:String // path to the source blank page
}
const props = defineProps<Props>();
</script>
<template>
    <div class="card">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="card-inner">
        <img src="https://uploads-ssl.webflow.com/61c181d8f24ef9de8bdb5e4c/61fa0060d14adbb7c48ea0b3_SHOWREEL-THUMB.gif" alt="Image" class="card-image">
        <h2 class="card-title">{{ title }}</h2>
        <p class="card-description">{{ description }}</p>
      </div>
    </div>
</template>


<style scoped>
.card {
  width: 100%;
  max-width: 350px;  
  height: auto;
  transition: all 0.2s;
  position: relative;
  cursor: pointer;
  margin-bottom: 20px; /* Optional: Add margin for spacing between cards */
}

.card-inner {
    width: inherit;
    min-height: 450px;
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
    transform: scale(1.2) rotate(1deg);
    z-index: 1000;
}

.card-image {
    width: 100%;
    min-height: 300px;
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
