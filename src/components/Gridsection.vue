<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { gsap } from "gsap";
import Projects from "./Projects.vue";
const mouseX = ref(0);
const mouseY = ref(0);
const mouseMoveFunc = (e) => {
  const depth = 20;
  const moveX = (e.pageX + window.innerWidth) / depth;
  const moveY = (e.pageY + window.innerHeight) / depth;

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
  document.addEventListener("mousemove", mouseMoveFunc);
});

onBeforeUnmount(() => {
  document.removeEventListener("mousemove", mouseMoveFunc);
});
</script>

<template>
  <div class="grid-section h-100 w-100">
    <h1 class="text-center">Projects</h1>
    <div class=" w-100 h-100">
      <Projects/>
    </div>
    <div
      class="big-blue2 absolute"
      :style="{
        transform: `translate3d(${0.1 * mouseX}px, ${0.1 * mouseY}px, 0)`,
      }"
    ></div>
  </div>
</template>

<style lang="scss">
.grid-section {
  padding: 3vw;
  min-height: 100vh;
  display: grid;
  position: relative;
}
.grid-section .big-blue2 {
  z-index: -100;
  display: block;
  overflow: auto;
  min-height: 500px;
  min-width: 500px;
  border-radius: 2000px;
  background-image: radial-gradient(
      circle farthest-corner at 50% 50%,
      #000 38%,
      rgba(0, 81, 139, 0) 74%
    ),
    url("https://uploads-ssl.webflow.com/61c181d8f24ef9de8bdb5e4c/61f92fbffb0623a4b27746c4_grain-2.gif");
  background-position: 0 0, 50% 50%;
  background-size: auto, 150px;
  background-repeat: repeat, repeat;
  background-attachment: scroll, scroll;
  box-shadow: 0 0 1000px 100px rgba(251, 0, 0, 0.462);
  transition: box-shadow 0.5s ease;
  position: absolute;
}
 
</style>
