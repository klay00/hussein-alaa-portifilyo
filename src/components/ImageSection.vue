<script setup lang="ts">
import img1 from '../assets/image/img1.png'
import img2 from '../assets/image/img2.png'
import img3 from '../assets/image/img3.png'
import img4 from '../assets/image/img4.jpeg'
import img5 from '../assets/image/img5.png'
import img6 from '../assets/image/img6.png'
import img7 from '../assets/image/img7.png'
import img8 from '../assets/image/img8.png'
const images =[img1 , img2 , img3 , img4 , img5 , img6 ,img7 , img8]
 </script>
<template>
    <div class="ImageSection">
     <div class="image-dis" v-for="(item , i) in images" :key="i">
        <img :src="item" alt="">
     </div>
    </div>
</template>
<style lang="scss">
.ImageSection{
    margin-top: 8vh;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    z-index: -201;
    margin: 0 10vw;
    overflow: hidden;
    position: relative;
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

}
.image-dis img{
    width: 100%;
    height: 100%;
    object-fit: fill;
    opacity: 1;
    z-index: -202;

}

</style>