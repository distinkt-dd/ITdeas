<template>
  <div class="project-list">
    <CardPreview />
    <CardPreview />
    <CardPreview />
    <CardPreview />
    <CardPreview />
    <CardPreview />
    <CardPreview />
    <CardPreview />
    <CardPreview />
    <CardPreview />
  </div>
</template>

<script lang="ts" setup>
import CardPreview from '@entities/cards/ui/CardPreview.vue'
</script>

<style scoped lang="scss">
.project-list {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  grid-column: 1/4;
  grid-row: 2 / auto;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 5px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--background-elements);
  }

  & > * {
    flex-shrink: 0;
  }
}
</style>
