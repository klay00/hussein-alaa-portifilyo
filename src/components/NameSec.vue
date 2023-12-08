<script setup lang="ts">
import { ref } from 'vue';

const createLetterInterval = (letterRef: any) => {
  setInterval(() => {
    letterRef.value = !letterRef.value;
  }, Math.floor(Math.random() * (1000 - 500 + 1)) + 500);
};

const A = ref(false);
const M = ref(true);
const H = ref(false);
const U = ref(true);
const S1 = ref(false);
const  S2 = ref(true);
const E = ref(false);
const I = ref(true);
const N = ref(false);
const L = ref(false);
createLetterInterval(I);
createLetterInterval(A);
createLetterInterval(M);
createLetterInterval(U);
createLetterInterval(S2);
createLetterInterval(S1);
createLetterInterval(E);
createLetterInterval(N);
createLetterInterval(L);
</script>

<template>
  <div class="main-text jst-center font-rspons">
    <h1>
      <span :class="{ 'font-old': I }"> I</span>
      <span :class="{ 'font-old': A }"> A</span>
      <span :class="{ 'font-old': M }"> M</span>
    </h1>
    <h2>
      <span :class="{ 'font-old': H }"> H</span>
      <span :class="{ 'font-old': U }"> U</span>
      <span :class="{ 'font-old': S1 }"> S</span>
      <span :class="{ 'font-old': S2 }"> S</span>
      <span :class="{ 'font-old': E }"> E</span>
      <span :class="{ 'font-old': I }"> I</span>
      <span :class="{ 'font-old': N }"> N</span>
    </h2>
    <h2>
      <span :class="{ 'font-old': A }">A</span>
      <span :class="{ 'font-old': L }"> L</span>
      <span :class="{ 'font-old': A }">A</span>
      <span :class="{ 'font-old': A }">A</span>
    </h2>
      <h2 class="font-old">
        Front-End Developer
  </h2>
  </div>

</template>
<style>
.main-text{
  text-align: center;
  margin-top: 100px;
  h1 {
    padding: 0;
    margin: 0;
 }
 h2 {
   padding: 0;
   margin: 0;
}
}
.flex{
  display: flex;
  height: 100%;
  flex-wrap: wrap;

}
.jst-center{
  justify-content: center;

}
.al-center{
  align-items: center;
}
.font-rspons{
  font-size: 2vw;
}
@media (max-width:768px) {
  .font-rspons{
    font-size: 8vw;
  }
}
</style>