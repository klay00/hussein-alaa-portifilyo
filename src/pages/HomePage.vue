<script setup lang="ts">
import NavBar from '@/components/navBar.vue';
import nameSectionVue from '@/components/nameSection.vue';
import Gridsection from '@/components/Gridsection.vue';
import ImageSection from '@/components/ImageSection.vue';
</script>
<template>
    <div class="name-section">
        <div > 
            <NavBar/>
        </div>
        <div class="pagesize"> 
            <nameSectionVue/>
        </div>
        <div class="pagesize"> 
            <ImageSection/>
        </div>
        <div class="pagesize"> 
            <Gridsection/>
        </div>
    </div>
</template>
<style>
.pagesize{
    height: 130vh;
}
</style>