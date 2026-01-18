<template>
  <PageContentTitle />
  <FilterButton />
  <SearchField />
  <ProjectList />
  <OtherAside>
    <AppFiltersWidget />
    <OtherInfoWidget />
  </OtherAside>
</template>

<script lang="ts" setup>
import ProjectList from '@features/project-list/ui/ProjectList.vue'
import PageContentTitle from '@shared/ui/elements/page-content-title/pageContentTitle'
import SearchField from '@shared/ui/elements/searchField/searchField.vue'
import AppFiltersWidget from '@widgets/app-filters/ui/AppFiltersWidget.vue'
import OtherInfoWidget from '@widgets/app-otherinfo/OtherInfoWidget.vue'
import OtherAside from '@widgets/other-aside/OtherAside.vue'
import FilterButton from '@/shared/ui/elements/button/FilterButton.vue'
</script>
