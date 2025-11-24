<template>
  <PageContentTitle />
  <SerchField />
  <ProjectList />
  <OtherAside>
    <OtherInfoWidget />
  </OtherAside>
</template>

<script lang="ts" setup>
import SerchField from '@shared/ui/elements/searchField/serchField'
import PageContentTitle from '@shared/ui/elements/page-content-title/pageContentTitle'
import ProjectList from '@features/project-list/ui/ProjectList.vue'
import OtherAside from '@widgets/other-aside/OtherAside.vue'
import OtherInfoWidget from '@widgets/app-otherinfo/OtherInfoWidget.vue'
</script>
