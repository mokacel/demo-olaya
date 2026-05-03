<script setup lang="ts">
defineProps<{
  type?: string
  placeholder?: string
  modelValue?: string
}>()

defineEmits<{ 'update:modelValue': [value: string] }>()
</script>

<template>
  <input
    :type="type ?? 'text'"
    :placeholder="placeholder"
    :value="modelValue"
    class="w-full px-5 py-3 text-sm rounded-full border border-(--color-border) bg-(--color-background) text-(--color-foreground) placeholder:text-(--color-muted-foreground) focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>
