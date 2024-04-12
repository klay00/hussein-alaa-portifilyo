<template>
  <div>
    <div class="nav-bar">
      <RouterLink to="/" class="text-xl">HUSSEIN ALAA</RouterLink>
      <VSpacer />
      <div v-if="showBtnNav" class="nav-bar-links">
        <div
          v-for="(item, index) in navItems"
          :key="index"
          link
          @click="scrollToSection(item.section)"
        >
          <span>{{ item.label }}</span>
        </div>
      </div>

      <VBtn @click="showNavLinks = !showNavLinks" v-else>
        <VIcon>{{ showNavLinks ? "mdi-menu" : "mdi-close" }}</VIcon>
      </VBtn>
    </div>
    <VSlideYTransition class="zIndex-1000">
      <VList v-if="showNavLinks" dense>
        <VListItem
          v-for="(item, index) in navItems"
          :key="index"
          link
          @click="scrollToSection(item.section)"
        >
          <VListItemTitle>{{ item.label }}</VListItemTitle>
        </VListItem>
      </VList>
    </VSlideYTransition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  VBtn,
  VIcon,
  VList,
  VListItem,
  VListItemTitle,
  VSlideYTransition,
  VSpacer,
} from "vuetify/components";
const showNavLinks = ref(false);
const showBtnNav = ref(false);
window.addEventListener("resize", () => {
  showBtnNav.value = window.innerWidth >= 740;
});
const scrollToSection = (selector: string) => {
  showNavLinks.value = false;
  const targetElement = document.querySelector(selector);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const navItems = [
  { label: "Main", section: "#name-section" },
  { label: "Work and Skills", section: "#skills-section" },
  { label: "Education", section: "#image-section" },
  { label: "Projects", section: "#grid-section" },
];
</script>

<style scoped lang="scss">
.zIndex-1000 {
  z-index: 1000;
  position: fixed;
  top: 0;
  width: 100%;
}
.nav-bar {
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

.text-xl {
  flex: 2;
  text-align: center;
}

.nav-bar-links {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  flex: 5;
}
</style>
