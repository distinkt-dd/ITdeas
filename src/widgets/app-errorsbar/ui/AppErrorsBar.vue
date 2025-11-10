<template>
  <div class="error-bar">
    <h2 class="h3 error-bar__title">Будьте внимательны при заполнении формы:</h2>
    <ul class="error-bar__errors" v-if="dataErrors">
      <li class="error-bar__errors-li" v-for="(fieldError, index) in fields" :key="index">
        <span v-for="(error, index) in dataErrors[fieldError]" :key="index">
          {{ error }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import dataErrors from '@shared/data/forms/errors.ts'
interface propsErrors {
  errorsField: string[]
}

const props = defineProps<propsErrors>()
const fields = props.errorsField
</script>

<style lang="scss" scoped>
.error-bar {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  background-color: var(--background-elements);
  border: var(--border-width-md) solid var(--color-border-main);
  border-radius: var(--border-radius-lg);
  max-width: 420px;
  padding: 20px;

  &__errors {
    display: flex;
    flex-direction: column;
    row-gap: 15px;

    &-li {
      display: flex;
      flex-direction: column;
      row-gap: 15px;
    }
  }
}
</style>
