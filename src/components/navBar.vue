<script setup lang="ts">
import { ref, onMounted } from 'vue';
import {
  VList,
  VListItem,
  VListItemTitle,
  VSlideYTransition,
} from "vuetify/components";

const showNavLinks = ref(false);
const navItems = [
  { label: "Main", section: "#name-section" },
  { label: "Work and Skills", section: "#skills-section" },
  { label: "Education", section: "#image-section" },
  { label: "Projects", section: "#grid-section" },
];

const scrollToSection = (selector: string) => {
  showNavLinks.value = false;
  const targetElement = document.querySelector(selector);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
const showBtnNav = ref({ value: window.innerWidth >= 740 });

window.addEventListener("resize", () => {
    showBtnNav.value = window.innerWidth >= 740;
});
 
</script>

<template>
  <div>
    <div class="nav-bar">
      <RouterLink to="/" class="text-xl">HUSSEIN ALAA</RouterLink>
      <div  v-if="!showBtnNav"   class="text-xl">
        <button class="menu-btn"  @click="showNavLinks = true"   >
          <div class="menu"></div>
          <div class="menu"></div>
          <div class="menu"></div>
        </button>
      </div>
       <div v-else class="nav-bar-links">
        <div
          v-for="(item, index) in navItems"
          :key="index"
          link
          @click="scrollToSection(item.section)"
        >
          <span>{{ item.label }}</span>
        </div>
      </div>
    
    </div>
    <div class="overLay" @click="showNavLinks = false" v-if="showNavLinks" >
      <VSlideYTransition class="zIndex-1000" theme="dark">
        <VList  dense>
          <VListItem
            v-for="(item, index) in navItems"
            :key="index"
            link
            @click="scrollToSection(item.section)"
          >
            <VListItemTitle >{{ item.label }}</VListItemTitle>
          </VListItem>
        </VList>
      </VSlideYTransition>
    </div>
  </div>
</template>

<style scoped lang="scss">

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
  span {
    cursor: pointer;
  }
}
.menu {
  width: 25px;
  height: 2px;
  background-color: white;
  cursor: pointer;
  margin: 4px 0;
}
.menu-btn{
  background-color: transparent;
  border: none;
}
.zIndex-1000 {
  z-index: 1001;
  position: fixed;
  top: 0;
  width: 100%;
}
.overLay{
  z-index: 1000;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color:rgba(0, 0, 0, 0.504);
}
</style>
