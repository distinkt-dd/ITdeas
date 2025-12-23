<template>
  <AppForm class="form__fio">
    <h2 class="form__title form__fio-title h2">Приветствуем тебя, дорогой пользователь!</h2>
    <p class="form__fio-subtitle">Давайте мы вам поможем настроить ваш профиль!</p>
    <FormField
      id="login-input"
      label="Ваше имя*"
      type="text"
      v-model="formValidation.formData.name"
      :maxlength="30"
      :minlength="5"
      :errors="formValidation.nameErrors"
      @blur="formValidation.validateName()"
      @input="formValidation.validateName()"
    />
    <FormField
      id="login-input"
      label="Ваша фамилия*"
      type="text"
      v-model="formValidation.formData.lastName"
      :maxlength="30"
      :minlength="5"
      :errors="formValidation.nameErrors"
      @blur="formValidation.validateLastName()"
      @input="formValidation.validateLastName()"
    />
    <FormField
      id="login-input"
      label="Ваше отчество"
      type="text"
      v-model="formValidation.formData.middleName"
      :maxlength="30"
      :minlength="5"
      :errors="formValidation.nameErrors"
      @blur="formValidation.validateMiddleName()"
      @input="formValidation.validateMiddleName()"
    />

    <p class="form__fio-subtitle danger">Пункты отмеченные * - обязательны</p>
    <AppButton
      :disabled="!formValidation.isValid || formValidation.isSubmitting"
      class="form__button button-gradient"
      type="submit"
    >
      <span>Продолжить</span>
    </AppButton>
    <ul class="form__errors" v-if="formValidation.hasErrors">
      <li
        class="form__errors-li"
        v-for="(fieldErrors, fieldName) in formValidation.errors"
        :key="fieldName"
      >
        <span v-for="error in Object.values(fieldErrors)" :key="error">
          {{ error }}
        </span>
      </li>
    </ul>
  </AppForm>
</template>
<script lang="ts" setup>
import { useFormValidate } from '@/features/forms'
import AppButton from '@/shared/ui/elements/button/AppButton.vue'
import FormField from '@/shared/ui/elements/field/FormField.vue'
import AppForm from '@/widgets/app-form/AppForm.vue'
import { onMounted } from 'vue'
const formValidation = useFormValidate()

onMounted(() => {
  formValidation.clearAllErrors()
  formValidation.validateForm('fio')
})
</script>

<style scoped lang="scss">
.form__fio {
  max-width: 444px;
  &-subtitle {
    text-align: left;
    &.danger {
      color: var(--color-accent);
    }
  }
}
</style>
