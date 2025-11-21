<template>
  <div class="search__field">
    <FormField id="searchField" label="Поиск" type="text" model-value="" />
    <AppButton class="search__button">
      <SearchIcon />
    </AppButton>
  </div>
</template>
<script setup lang="ts">
import FormField from '@shared/ui/elements/field/FormField.vue'
import AppButton from '@shared/ui/elements/button/AppButton.vue'
import SearchIcon from '@shared/ui/elements/icons/search-icon/SearchIcon.vue'
</script>

<style scoped lang="scss">
.search {
  &__field {
    align-self: center;
    grid-column: 2/4;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__button {
    @include square(44px);
    align-self: center;

    @include hover {
      scale: 1.1;
      color: var(--color-accent);
    }
  }
}

.form__field {
  margin-block-start: 0px;
}
</style>
