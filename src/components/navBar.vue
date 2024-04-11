<script setup lang="ts">
 import { ref } from 'vue';
 const isDialogOpen =ref(false)
const openDialog =()=>{
  isDialogOpen.value = !isDialogOpen.value 

}
</script>

<template>
  <div class="nav-bar">
    <RouterLink  to="/" class="text-xl">
       HUSSEIN ALAA
    </RouterLink>
    <button @click="openDialog" class="contact-button">Contact</button>
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
.contact-button {
  --red: #FF5733; /* Define the red color */
  font-size: 15px;
  padding: 0.7em 2.7em;
  letter-spacing: 0.06em;
  position: relative;
  font-family: inherit;
  border-radius: 0.6em;
  overflow: hidden;
  transition: all 0.3s;
  line-height: 1.4em;
  border: 2px solid var(--red); /* Use the red color variable */
  background: linear-gradient(to right, rgba(255, 87, 51, 0.1) 1%, transparent 40%, transparent 60%, rgba(255, 87, 51, 0.1) 100%);
  color: var(--red); /* Use the red color variable */
  box-shadow: inset 0 0 10px rgba(255, 87, 51, 0.4), 0 0 9px 3px rgba(255, 87, 51, 0.1);
}

.contact-button:hover {
  color: #FFAB97; /* Change hover color to a lighter shade of red */
  box-shadow: inset 0 0 10px rgba(255, 87, 51, 0.6), 0 0 9px 3px rgba(255, 87, 51, 0.2);
  cursor: pointer;
}

.contact-button:before {
  content: "";
  position: absolute;
  left: -4em;
  width: 4em;
  height: 100%;
  top: 0;
  transition: transform .4s ease-in-out;
  background: linear-gradient(to right, transparent 1%, rgba(255, 87, 51, 0.1) 40%, rgba(255, 87, 51, 0.1) 60%, transparent 100%);
}

.contact-button:hover:before {
  transform: translateX(15em);
}

</style>