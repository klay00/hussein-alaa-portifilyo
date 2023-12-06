<template>
    <div class="ImageSection">
     <div class="image-dis" v-for="i in 8" :key="i">
        <img src="../assets/image/img1.png" alt="">
     </div>
    </div>
</template>
<style>
.ImageSection{
    margin-top: 8vh;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    z-index: -201;
}
.image-dis{
    width: 50%;
    height: 25%;
    z-index: -203;

}
.image-dis img{
    width: 100%;
    height: 100%;
    object-fit: fill;
    opacity: 0.4;
    z-index: -202;

}
</style>