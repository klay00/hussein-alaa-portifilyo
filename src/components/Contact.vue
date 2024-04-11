<template>
  <VDivider :thickness="2" style="opacity: 1;"/>
  <!-- <div class="scroll-container" ref="container">
      <a href="https://www.linkedin.com/in/hussein-alaa-4a350a274" target="_blank">Linkedin</a>
      <a href="https://www.instagram.com/ooker_a/?igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank">Instagram</a>
      <a href="https://github.com/klay00" target="_blank">Github</a>
      <a href="https://wa.me/+9647812364039" target="_blank">WhatsApp</a>
      
   </div> -->
   <div class="m-scroll">
    <div class="m-scroll__title">
      <div>
        <h1>
          <a href="https://dribbble.com/JulianoF">Likedin,</a> <a href="https://dribbble.com/JulianoF">Dribbble</a> &amp; <a href="https://dribbble.com/JulianoF">Instagram </a>&nbsp;
        </h1>
        <h1>
        <a href="https://dribbble.com/JulianoF">Likedin,</a> <a href="https://dribbble.com/JulianoF">Dribbble</a> &amp; <a href="https://dribbble.com/JulianoF">Instagram </a>&nbsp;
        </h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';
import { onMounted, ref } from 'vue';
import { VDivider } from 'vuetify/components';

const container = ref(null);

onMounted(() => {
  // Get the width of the content inside the container
  const contentWidth = container.value.scrollWidth;
  
   const scrollDuration = contentWidth / 100; // Adjust 100 to control scroll speed
  
  // Create GSAP timeline for the infinite scroll animation
  const tl = gsap.timeline({ repeat: -1 });
  
  // Animating the scroll position from right to left
  tl.to(container.value, {
    x: contentWidth, // Move to the right edge of the content
    duration: scrollDuration,
    ease: "linear",
    onComplete: () => {
      // Reset the scroll position when the animation completes
      gsap.set(container.value, { x: 0 });
    }
  });
});
</script>

<style scoped>
.m-scroll {
  display: flex;
  position: relative;
  width: 800px;
  height: 600px;
  margin: auto;
  background-color: #D34444;
  overflow: hidden;
  z-index: 1;

    &__title {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    white-space: nowrap;
    transform: scale(2);
    transition: all 1s ease;
    & > div {
      display: flex;
      animation: scrollText 33s infinite linear;
    }
    h1 {
      margin: 0;
      font-size: 140px;
      color: rgba(255,255,255,1);
      transition: all 2s ease;
      }
      a {
        text-decoration:none;
        color:white;
        }
      a:hover{
        -webkit-text-stroke: 1px white;
        color: transparent;
      }
  }
}

/*div:hover {
  animation-play-state: paused;
}*/
@keyframes scrollText {
  from   { transform: translateX(0%); }
  to { transform: translateX(-50%); }
}
</style>
