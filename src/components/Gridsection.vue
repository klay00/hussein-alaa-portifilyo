<template>
    <div class="grid-section">
        <div class="chield-grid" v-for="i in 650" :key="i"></div>
    </div>
</template>
<style>
.grid-section{
    margin-top: 8vh;
    height: 100vh;
    display: grid;
    justify-items: stretch;
    align-items: stretch;
    grid-auto-columns: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
.chield-grid{
    height: 8vh;
    width: 6vw;
    border: 1px solid white;
    grid-row: auto;

}
</style>