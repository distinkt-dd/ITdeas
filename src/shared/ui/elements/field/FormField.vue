<template>
  <div class="form__field field">
    <label :for="id" class="form__field-label">{{ label }}</label>
    <input
      :id="id"
      :name="id"
      :type="type"
      class="form__field-input"
      placeholder=" "
      autocomplete="off"
      :maxlength="maxlength"
      :minlength="minlength"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id: string
  label: string
  type: string
  modelValue: string
  maxlength?: number
  minlength?: number
}>()
defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<style scoped lang="scss">
.form__field {
  &-input {
    &:focus {
      border-color: var(--color-border-accent);
    }
  }
}
</style>
