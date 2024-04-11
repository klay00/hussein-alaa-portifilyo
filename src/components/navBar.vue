<script setup lang="ts">
const scrollToSection = (selector) => {
  const targetElement = document.querySelector(selector);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  }
};
</script>

<template>
  <div class="nav-bar">
    <RouterLink to="/" class="text-xl">HUSSEIN ALAA</RouterLink>
    
    <a href="#name-section" class="nav-link" @click="scrollToSection('#name-section')">Main</a>
    <a href="#skils-section" class="nav-link" @click="scrollToSection('#skils-section')">Work and Skills</a>
    <a href="#image-section" class="nav-link" @click="scrollToSection('#image-section')">Eduction</a>
    <a href="#grid-section" class="nav-link" @click="scrollToSection('#grid-section')">Projects</a>

   </div>
</template>
<style scoped>
.nav-bar{
  height: 8vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 18px;
  z-index: 500;
  position: fixed;
  width: 100%;
  top: 0;
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.3px);
  -webkit-backdrop-filter: blur(7.3px);
}
</style>