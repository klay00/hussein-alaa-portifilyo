<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import NameSec from './NameSec.vue'

onUnmounted(() => {
  // Clean up if needed
});

// Track mouse position
const mouseX = ref(0);
const mouseY = ref(0);
const velocityX = ref(0);
const velocityY = ref(0);
const dampingFactor = 0.05;
const maxDistance = 50;

window.addEventListener('mousemove', (e) => {
  mouseX.value = e.clientX;
  mouseY.value = e.clientY;
});

const moveBigBlue = () => {
  const deltaX = mouseX.value - velocityX.value;
  const deltaY = mouseY.value - velocityY.value;

  velocityX.value += dampingFactor * deltaX;
  velocityY.value += dampingFactor * deltaY;

  // Limit the movement range
  velocityX.value = Math.min(Math.max(velocityX.value, -maxDistance), maxDistance);
  velocityY.value = Math.min(Math.max(velocityY.value, -maxDistance), maxDistance);

  // Update the position of the big blue element using GSAP
  gsap.to('.big-blue', {
    x: 0.1 * mouseX.value,
    y: 0.1 * mouseY.value,
    ease: 'power3.out',
  });

  // Always rotate the big blue element slowly
  gsap.to('.big-blue', {
    rotation: '+=0.3',
    ease: 'none',
  });

  // Check if the cursor has stopped moving
  if (Math.abs(velocityX.value) < 0.1 && Math.abs(velocityY.value) < 0.1) {
    // If the cursor has stopped moving, rotate the big blue element
    gsap.to('.big-blue', {
      rotation: 4,
      duration: 4,
      ease: 'power3.out',
    });
  }

  requestAnimationFrame(moveBigBlue);
};

onMounted(() => {
  moveBigBlue();
});


const slides = ['go to email', 'husssein.alaa.div@gmail.com','contact','go to email', 'husssein.alaa.div@gmail.com','contact','go to email', 'husssein.alaa.div@gmail.com','contact' ];
const slideTrack = ref(null);
const slideWidth = ref(0);

const calculateSlideWidth = () => {
  slideWidth.value = slideTrack.value.offsetWidth;
};

const moveCarousel = () => {
  gsap.to(slideTrack.value, {
    x: `-=${slideWidth.value}`,
    duration: 1,
    onComplete: () => {
      gsap.set(slideTrack.value, { x: 0 });
    },
  });
};


onMounted(() => {
  calculateSlideWidth();

  // Set up GSAP animation
  Animation = gsap.to({}, {
    duration: 3,
    repeat: -1,
    onRepeat: moveCarousel,
  });

  // Listen for window resize to recalculate slide width
  window.addEventListener('resize', calculateSlideWidth);
});

// Cleanup event listener on component unmount
onUnmounted(() => {
  window.removeEventListener('resize', calculateSlideWidth);
});
</script>

<template>
  <div class="h-[92vh] px-20 flex justify-center items-center relative main-section relative">
    <NameSec/>
    <div 
    class="big-blue absolute bottom-20 right-0 "
      :style="{
        transform: `translate3d(${0.1 * mouseX}px, ${0.1 * mouseY}px, 0)`,
      }"
    ></div>
    
    <div class=" absolute bottom-10 right-10 " > 
    <div class="slider">
      <div class="slide-track">
        <div class="slide tracking-wide"  v-for="item in slides" :key="item">
          <li><a href="#">{{item}}</a></li>
        </div>
      </div>
    </div>
  </div>

  <div class=" absolute bottom-10 left-10 flex gap-10 text-lg"> 
     <a href="#">Linkedin</a>
     <a href="#">instgram</a>
     <a href="#">Github</a>
  </div>

  </div>
</template>

<style lang="scss">
  .big-blue {
    z-index: -11; /* Set z-index to 1 */
    display: block;
    overflow: visible;
    min-height: 2000px;
    min-width: 2000px;
    border-radius: 2000px;
    background-image: radial-gradient(circle farthest-corner at 50% 50%, #000 38%, rgba(0, 81, 139, 0) 74%),
      url("https://uploads-ssl.webflow.com/61c181d8f24ef9de8bdb5e4c/61f92fbffb0623a4b27746c4_grain-2.gif");
    background-position: 0 0, 50% 50%;
    background-size: auto, 150px;
    background-repeat: repeat, repeat;
    background-attachment: scroll, scroll;
    box-shadow: 0 0 1000px 100px rgba(251, 0, 0, 0.462);
    transition: box-shadow 0.5s ease; // Add smooth transition for box-shadow
  }
  @mixin white-gradient {
    background: linear-gradient(to right,  rgba(255, 255, 255, 0) rgba(255, 255, 255, 0) 100%);
  }
  
  $animationSpeed: 29s;
  // Animation
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-400px * 6))}
  }
  // Styling
  .slider {
    height:40px;
    margin: auto;
    overflow:hidden;
    position: relative;
    width: 260px;
    border: 2px solid white;
    border-radius: 50px;
    padding-top: 6px;
    transition: background-color 0.3s, color 0.3s;
    &:hover {
      background-color: white;
      color: #000;
    }
    &::before,
    &::after {
      @include white-gradient;
      content: "";
      height: 100px;
      position: absolute;
      width: 400px;
      z-index: 2;
    }
    
    &::after {
      right: 0;
      top: 0;
      transform: rotateZ(180deg);
    }
  
    &::before {
      left: 0;
      top: 0;
    }

    .slide-track {
      animation: scroll $animationSpeed linear infinite;
      display: flex;
      width: calc(400px * 6);
    }
    
    .slide {
      height: 50px;
      width: 700px;
      background-color: transparent;
    }
  }
  .font-old{
    font-family: sans-serif;
  }
</style>
