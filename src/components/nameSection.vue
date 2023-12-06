<script setup lang="ts">
import { gsap } from 'gsap';
import NameSec from './NameSec.vue'
const slides = ['go to email', 'husssein.alaa.div@gmail.com','contact','go to email', 'husssein.alaa.div@gmail.com','contact','go to email', 'husssein.alaa.div@gmail.com','contact' ];


document.addEventListener('mousemove', mouseMoveFunc);
function mouseMoveFunc(e) {
  const depth = 5;
  const moveX = (((e.pageX)-(window.innerWidth))/depth-800);
  const moveY = (((e.pageY)-(window.innerHeight))/depth-1000);
  gsap.to(".big-blue", {
    duration: 3,
    x: moveX,
    y: moveY,
    ease: "slow",
    stagger: 8,
    overwrite: true
  });
  gsap.to(".big-blue", {
    duration: 100,
    rotation: "+=360",
    repeat: -1,
    ease: "linear",
  });
}
</script>

<template>
  <div class="relative main-section">
    <NameSec/>

    <div class="content-container">    
      <div 
      class="big-blue absolute"
        :style="{
          transform: `translate3d(${0.1 * mouseX}px, ${0.1 * mouseY}px, 0)`,
        }"
      ></div>
    </div>
    <div class="main-contact absolute pos-bt">
      <div class=" pos-bt pos-right" > 
      <div class="slider">
        <div class="slide-track">
          <div class="slide tracking-wide"  v-for="item in slides" :key="item">
            <li><a href="#">{{item}}</a></li>
          </div>
        </div>
      </div>
    </div>
  
    <div class="contact"> 
       <a href="#">Linkedin</a>
       <a href="#">instgram</a>
       <a href="#">Github</a>
    </div>
    </div>
  </div>
</template>

<style lang="scss">
.relative{
  position: relative;
}
.absolute{
  position: absolute;
}
.name-section{
  min-height: 100vh;
  overflow: hidden;
}
.main-section{
  height: 90vh;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.content-container {
  z-index: -199; 
}
  .big-blue {
    z-index: -100;
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
    position: absolute;
    top: -100;
    left: -200;
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
    height:30px;
    margin: auto;
    overflow:hidden;
    position: relative;
    width: 280px;
    border: 2px solid white;
    border-radius: 50px;
    padding-top: 6px;
    color: white;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: white;
       color: #000;
      a{
        color: #000;
      }
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
