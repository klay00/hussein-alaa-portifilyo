<script setup lang="ts">
import { VRow, VCol } from 'vuetify/components';
import ProjectCard from "./ProjectCard.vue";
const projectList = [
  { id: 1, title: "Project 1", description: "Description 1", src: "" },
  { id: 2, title: "Project 2", description: "Description 2", src: "" },
  { id: 3, title: "Project 3", description: "Description 3", src: "" },
];
</script>
<template>
    <VRow class="card-center">
      <VCol v-for="project in projectList" :key="project.id" cols="12" lg="3" md="4" class="card-center">
        <ProjectCard :title="project.title" :id="project.id" :description="project.description" :src="project.src"/>
      </VCol>
      </VRow>
</template>
<style>
.card-center{
  display: flex;
  justify-content: center!important;
}
</style>