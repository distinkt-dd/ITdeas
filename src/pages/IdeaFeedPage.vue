<template>
  <PageContentTitle />
  <SerchField />
  <ProjectList />
</template>

<script lang="ts" setup>
import SerchField from '@shared/ui/elements/searchField/serchField'
import PageContentTitle from '@shared/ui/elements/page-content-title/pageContentTitle'
import ProjectList from '@features/project-list/ui/ProjectList.vue'
</script>
