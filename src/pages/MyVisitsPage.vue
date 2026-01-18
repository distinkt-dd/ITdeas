<template>
  <PageContentTitle />
  <ProjectList class="myvisit__content" />
  <OtherAside>
    <OtherInfoWidget />
  </OtherAside>
</template>

<script lang="ts" setup>
import ProjectList from '@/features/project-list/ui/ProjectList.vue'
import PageContentTitle from '@/shared/ui/elements/page-content-title/pageContentTitle.vue'
import OtherInfoWidget from '@/widgets/app-otherinfo/OtherInfoWidget.vue'
import OtherAside from '@/widgets/other-aside/OtherAside.vue'
</script>

<style scoped></style>
