<template>
  <OtherElementsDecoration
    :id="filter.id"
    v-for="filter in filterWidgetConfig"
    :key="filter.id"
    class="other__info-filters filters__item"
    :is-tab="true"
  >
    <div class="filters__item-inner" @click="activatedContent(filter.id)">
      <p>
        {{ filter.text }}
      </p>
      <AppTabArrow class="arrow" :class="{ rotated: activeFilterIds.includes(filter.id) }" />
    </div>

    <div
      class="filters__item-content filters-content"
      :class="activeFilterIds.includes(filter.id) ? 'active' : ''"
    >
      <AppButton
        v-for="el in filter.elements"
        :key="el.id"
        class="filters-content__btn button button-accent"
      >
        {{ el.elName }}
      </AppButton>
    </div>
  </OtherElementsDecoration>
</template>

<script setup lang="ts">
import OtherElementsDecoration from '@shared/ui/elements/other/OtherElementsDecoration.vue'
import { filterWidgetConfig } from '@features/filters/lib/filters-config.ts'
import AppTabArrow from '@shared/ui/elements/arrows/AppTabArrow.vue'
import AppButton from '@shared/ui/elements/button/AppButton.vue'
import { ref } from 'vue'

const activeFilterIds = ref<number[]>([])

const activatedContent = (filterId: number[]) => {
  const index = activeFilterIds.value.indexOf(filterId)

  if (index === -1) {
    activeFilterIds.value.push(filterId)
  } else {
    activeFilterIds.value.splice(index, 1)
  }
}
</script>

<style scoped lang="scss">
.filters__item {
  display: flex;
  flex-direction: column;

  &-inner {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & p {
      margin: 0;
    }
  }
}

.filters-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  max-height: 0;
  overflow: hidden;
  opacity: 0;

  &__btn {
    padding: 3px 10px;
    opacity: 0;
    transform: translateY(-10px);
  }

  &.active {
    animation: expandContent 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    padding-top: 15px;

    .filters-content__btn {
      animation: fadeInUp 0.3s ease 0.1s forwards;
    }
  }

  &:not(.active) {
    animation: collapseContent 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;

    .filters-content__btn {
      animation: fadeOutDown 0.2s ease forwards;
    }
  }
}

.rotated {
  animation: rotateArrow 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.arrow:not(.rotated) {
  animation: rotateBack 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes rotateArrow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(90deg);
  }
}

@keyframes rotateBack {
  0% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes rotatedArrow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(90deg);
  }
}

@keyframes expandContent {
  0% {
    max-height: 0;
    opacity: 0;
    padding-top: 0;
  }
  100% {
    max-height: 500px;
    opacity: 1;
    padding-top: 15px;
  }
}

@keyframes collapseContent {
  0% {
    max-height: 500px;
    opacity: 1;
    padding-top: 15px;
  }
  100% {
    max-height: 0;
    opacity: 0;
    padding-top: 0;
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOutDown {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(10px);
  }
}
</style>
