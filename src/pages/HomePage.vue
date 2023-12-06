<script setup lang="ts">
import NavBar from '@/components/navBar.vue';
import nameSectionVue from '@/components/nameSection.vue';
import Gridsection from '@/components/Gridsection.vue';
</script>
<template>
    <div class="name-section">
        <div>
            <NavBar/>
        </div>
        <div>
            <nameSectionVue/>
        </div>
        <div>
            <Gridsection/>
        </div>
    </div>
</template>
