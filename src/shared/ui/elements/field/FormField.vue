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
