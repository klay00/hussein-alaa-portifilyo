<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';

const mouseX = ref(0);
const mouseY = ref(0);

const mouseMoveFunc = (e) => {
  const depth = 10;
  const moveX = (((e.pageX) + (window.innerWidth)) / depth);
  const moveY = (((e.pageY) + (window.innerHeight)) / depth);

  gsap.to(".big-blue2", {
    duration: 1,
    x: moveX,
    y: moveY,
    ease: "slow",
    stagger: 0.2,
    overwrite: true,
  });
};

onMounted(() => {
  document.addEventListener('mousemove', mouseMoveFunc);
});

onBeforeUnmount(() => {
  document.removeEventListener('mousemove', mouseMoveFunc);
});
</script>

<template>
  <div class="grid-section">
    <div class="chield-grid" v-for="i in 650" :key="i" :style="{ opacity: getGridBackgroundColor(i) }"></div>
    <div
      class="big-blue2 absolute"
      :style="{
        transform: `translate3d(${0.1 * mouseX}px, ${0.1 * mouseY}px, 0)`,
      }"
    ></div>
  </div>
</template>

<style>
/* Your existing styles remain unchanged */
</style>

<script lang="ts">

export default {
  methods: {
    getGridBackgroundColor(index) {
      if (index % 5 === 0 || index % 7 === 0 || index % 7 === 9 ) {
        return '1';
      } else {
        return '0';
      }
    },
  },
};
</script>

<style>
.grid-section{
    margin-top: 8vh;
    height: 100vh;
    display: grid;
    justify-items: stretch;
    align-items: stretch;
    grid-auto-columns: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    position: relative;
    -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
.grid-section .big-blue2{
    z-index:  -100;
     display: block;
    overflow: visible;
    min-height: 500px;
    min-width: 500px;
    border-radius: 2000px;
    background-image: radial-gradient(circle farthest-corner at 50% 50%, #000 38%, rgba(0, 81, 139, 0) 74%),
      url("https://uploads-ssl.webflow.com/61c181d8f24ef9de8bdb5e4c/61f92fbffb0623a4b27746c4_grain-2.gif");
    background-position: 0 0, 50% 50%;
    background-size: auto, 150px;
    background-repeat: repeat, repeat;
    background-attachment: scroll, scroll;
    box-shadow: 0 0 1000px 100px rgba(251, 0, 0, 0.462);
    transition: box-shadow 0.5s ease;
    position: absolute;
}
.chield-grid{
    height: 8vh;
    width: 6vw;
    border: 1px solid white;
    grid-row: auto;
   opacity: 0.2;
}
</style>