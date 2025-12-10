<template>
  <PageContentTitle />
  <SearchField />
  <ProjectList />
  <OtherAside>
    <AppFiltersWidget />
    <OtherInfoWidget />
  </OtherAside>
</template>

<script lang="ts" setup>
import SearchField from '@shared/ui/elements/searchField/searchField.vue'
import PageContentTitle from '@shared/ui/elements/page-content-title/pageContentTitle'
import ProjectList from '@features/project-list/ui/ProjectList.vue'
import OtherAside from '@widgets/other-aside/OtherAside.vue'
import OtherInfoWidget from '@widgets/app-otherinfo/OtherInfoWidget.vue'
import AppFiltersWidget from '@widgets/app-filters/ui/AppFiltersWidget.vue'
</script>
