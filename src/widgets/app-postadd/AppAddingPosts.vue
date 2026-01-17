<script setup lang="ts">
import AppButton from '@/shared/ui/elements/button/AppButton.vue'
import FormAreaField from '@/shared/ui/elements/field/FormAreaField.vue'
import FormField from '@/shared/ui/elements/field/FormField.vue'
import AppSubstrate from '@/shared/ui/elements/substrate/AppSubstrate.vue'
</script>

<template>
  <AppSubstrate class="page-addingposts">
    <div class="page-addingposts__form-control">
      <FormField
        class="form-control__input"
        id="titleproj-input"
        label="Название проекта"
        type="text"
        :maxlength="30"
        :minlength="5"
      />
      <FormAreaField id="description-area" label="Описание проекта" type="text" />
      <FormField
        class="form-control__input"
        id="platformproj-input"
        label="Платформы"
        type="text"
        :maxlength="30"
        :minlength="5"
      />
      <FormField
        class="form-control__input"
        id="tagsproj-input"
        label="Теги проекта"
        type="text"
        :maxlength="30"
        :minlength="5"
      />
      <div class="form__select">
        <label for="tags-select"></label>
        <select name="tags" id="tags-select">
          <option value="">Выбор тегов</option>
          <option value="frontend">frontend</option>
          <option value="frontend">backend</option>
        </select>
      </div>
      <div class="form__select">
        <label for="tags-select"></label>
        <select name="tags" id="tags-select">
          <option value="">Выбор навыков</option>
          <option value="frontend">CSS</option>
          <option value="frontend">HTML</option>
          <option value="frontend">JS</option>
        </select>
      </div>
      <AppButton class="button button-gradient"> Опубликовать </AppButton>
    </div>
  </AppSubstrate>
</template>

<style setup lang="scss">
.page-addingposts {
  display: flex;
  max-width: 650px;
  width: 100%;
  grid-column: 1/-1;
  grid-row: 2 / auto;
  padding: fluid(15, 10);
  border-radius: var(--border-radius-lg);

  @include tablet {
    max-width: 100%;
  }

  &__form-control {
    max-width: 70%;
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: fluid(20, 15);

    @include mobile {
      max-width: 100%;
    }
  }
}
</style>
