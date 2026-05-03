<script setup lang="ts">
defineProps<{
  placeholder?: string
  rows?: number
  modelValue?: string
}>()

defineEmits<{ 'update:modelValue': [value: string] }>()
</script>

<template>
  <textarea
    :placeholder="placeholder"
    :rows="rows ?? 4"
    :value="modelValue"
    class="w-full px-5 py-4 text-sm rounded-3xl border border-(--color-border) bg-(--color-background) text-(--color-foreground) placeholder:text-(--color-muted-foreground) focus:outline-none focus:ring-2 focus:ring-primary-500 transition resize-none"
    @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
  />
</template>
