<template>
    <div class="relative edu-section">
      <!-- Image Section -->
      <div class="ImageSection">
        <div class="image-dis" v-for="(item, i) in images" :key="i">
          <img :src="item" alt="">
        </div>
      </div>
  
      <!-- Text Effect Section -->
      <div class="container">
        <h1 class="text font-old">Education<span>Computer Engineering</span></h1>
        <h1 class="text font-old">Courses<span>Masarat Program USADI</span></h1>
        <h1 class="text font-old">Udemy<span>Front End basics HTML and CSS</span></h1>
        <h1 class="text font-old">self learning<span>Read the documents very well</span></h1>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  
  import img1 from '../assets/image/img1.png';
  import img2 from '../assets/image/img2.png';
  import img3 from '../assets/image/img3.png';
  import img4 from '../assets/image/img4.jpeg';
  import img5 from '../assets/image/img5.png';
  import img6 from '../assets/image/img6.png';
  import img7 from '../assets/image/img7.png';
  import img8 from '../assets/image/img8.png';
  
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  
  gsap.registerPlugin(ScrollTrigger);
  
  const textElements = gsap.utils.toArray('.text');
  
  textElements.forEach((text) => {
    gsap.to(text, {
      backgroundSize: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: text,
        start: 'center 80%',
        end: 'center 20%',
        scrub: true,
      },
    });
  });
  </script>
  
<style lang="scss" scoped>
.edu-section{
    min-height: 100vh;
    margin: 100px 0px;
}
  .container {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
  }
  
  .text {
    flex: 1;
    font-size: 8rem;
    letter-spacing: -.01em;
    line-height: 100%;
    margin: 0;
    width: 100%;
    color: rgb(182, 182, 182, 0.2);
    background: linear-gradient(to right, #b6b6b6, #b6b6b6) no-repeat;
    -webkit-background-clip: text;
    background-clip: text;
    background-size: 0%;
    transition: background-size cubic-bezier(.1,.5,.5,1) 0.5s;
    
  
    border-bottom: 1px solid #2F2B28;
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;

  }
  @media screen and (max-width: 740px) {
    .text , span {
        font-size: 4rem;
        height: 100%;
    }
  }
  span {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #ce4247;
    color: #0D0D0D;
    font-size: 7rem;
    clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
    transform-origin: center;
    transition: all cubic-bezier(.1,.5,.5,1) 0.4s;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .text:hover > span {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
.ImageSection{
    margin-top: 8vh;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    z-index: -201;
    margin: 0 10vw;
    overflow: hidden;
    position: absolute;
    
    @media screen and ( min-width: 790px ) {
        .image-dis{
            width: 33.333%;
            height: 50%;        
        }
    }
}
.image-dis{
    width: 50%;
    height: 25%;
    z-index: -203;
    opacity: 0.4;

}
.image-dis img{
    width: 100%;
    height: 100%;
    object-fit: fill;
    opacity: 1;
    z-index: -202;
    opacity: 0.4;
}

</style>  