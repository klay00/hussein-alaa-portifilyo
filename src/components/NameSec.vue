<template>
  <div class="mt-10">
    <h1 class="landing-text font-old">{{ dynamicText }}</h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin)

const dynamicText = ref('Hussein Alaa')

onMounted(() => {
  const masterTl = gsap.timeline({ repeat: -1 })
  const landingText = ['Front End Developer']

  landingText.forEach((word) => {
    const tl = gsap.timeline({
      repeat: 1,
      yoyo: true,
      repeatDelay: 1,
      ease: 'power2.inOut'
    })
    tl.to('.landing-text', {
      duration: 3,
      text: word,
      ease: 'power2.inOut',
      onComplete: () => dynamicText.value = word
    })
    masterTl.add(tl)
  })
})
</script>

<style>
.mt-10{
  position: absolute;
  top: 50%;
  right:50% ;
  transform: translate(50%,-50%);
  text-align: center;
  font-size: 2.4rem;
}
</style>
