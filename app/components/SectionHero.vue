<script setup lang="ts">
import { brand } from '~/utils/brand'

defineProps<{
  title: string
  subtitle?: string
  eyebrow?: string
}>()
</script>

<template>
  <section class="py-24 md:py-36">
    <div class="max-w-5xl mx-auto px-6">
      <p v-if="eyebrow" class="text-sm font-medium text-primary-500 mb-4 uppercase tracking-widest">
        {{ eyebrow }}
      </p>
      <h1 class="font-serif text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight mb-6">
        {{ title }}
      </h1>
      <p v-if="subtitle" class="text-lg md:text-xl text-(--color-muted-foreground) leading-relaxed max-w-xl mb-10">
        {{ subtitle }}
      </p>
      <div class="flex flex-wrap gap-4">
        <BaseButton :to="brand.cta.to" size="lg">{{ brand.cta.label }}</BaseButton>
        <BaseButton to="/work" variant="ghost" size="lg">View work →</BaseButton>
      </div>
    </div>
  </section>
</template>
