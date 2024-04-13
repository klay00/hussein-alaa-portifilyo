<script setup lang="ts">
import { ref, onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import NavBar from "@/components/navBar.vue";
import nameSectionVue from "@/components/nameSection.vue";
import Gridsection from "@/components/Gridsection.vue";
import SkilsSection from "@/components/SkilsSection.vue";
import ImageSection from "@/components/ImageSection.vue";
import Footer from "@/components/Footer.vue";

gsap.registerPlugin(ScrollTrigger);

const nameSectionRef = ref<HTMLElement | null>(null);
const skilsSectionRef = ref<HTMLElement | null>(null);
const imageSectionRef = ref<HTMLElement | null>(null);
const gridSectionRef = ref<HTMLElement | null>(null);
const ProjectsSectionRef = ref<HTMLElement | null>(null);

onMounted(() => {
  // Set up animations for each section
  setupScrollAnimations(nameSectionRef.value);
  setupScrollAnimations(skilsSectionRef.value);
  setupScrollAnimations(imageSectionRef.value);
  setupScrollAnimations(gridSectionRef.value);
  setupScrollAnimations(ProjectsSectionRef.value);
});

function setupScrollAnimations(element: HTMLElement | null) {
  if (!element) return;

  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 100,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",  
        end: "bottom 20%",  
        toggleActions: "play none none reverse",
      },
    }
  );
}
</script>

<template>
  <div class="name-section">
    <div>
      <NavBar />
    </div>
    <div class="pagesize" ref="nameSectionRef" id="name-section">
      <nameSectionVue />
    </div>
    <div class="pagesize" ref="skilsSectionRef" id="skills-section">
      <SkilsSection />
    </div>
    <div class="pagesize" ref="imageSectionRef" id="image-section">
      <ImageSection />
    </div>
    <div class="h-25" ref="gridSectionRef" id="grid-section">
      <Gridsection />
    </div>
    <div >
      <Footer />
    </div>
  </div>
</template>

<style>
.pagesize {
  min-height: 120vh;
}
.footers {
  height: 50vh;
}
</style>
