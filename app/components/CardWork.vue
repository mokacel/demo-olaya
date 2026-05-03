<script setup lang="ts">
import { ImageIcon } from 'lucide-vue-next'

defineProps<{
  title: string
  description: string
  image?: string
  tags?: string[]
  to: string
  year?: string
  role?: string
}>()
</script>

<template>
  <NuxtLink :to="to" class="group flex flex-col gap-4">
    <div class="overflow-hidden rounded-lg bg-(--color-muted) aspect-video">
      <NuxtImg
        v-if="image"
        :src="image"
        :alt="title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div v-else class="w-full h-full flex items-center justify-center text-(--color-muted-foreground)">
        <ImageIcon class="size-8" />
      </div>
    </div>

    <div class="flex flex-col gap-2">
      <div class="flex items-start justify-between gap-4">
        <h3 class="font-medium group-hover:text-primary-500 transition-colors">{{ title }}</h3>
        <span v-if="year" class="text-xs text-(--color-muted-foreground) shrink-0 mt-0.5">{{ year }}</span>
      </div>
      <p v-if="role" class="text-xs text-(--color-muted-foreground)">{{ role }}</p>
      <p class="text-sm text-(--color-muted-foreground) leading-relaxed line-clamp-2">{{ description }}</p>
      <div v-if="tags?.length" class="flex flex-wrap gap-1.5 mt-1">
        <span
          v-for="tag in tags"
          :key="tag"
          class="text-xs px-2 py-0.5 rounded-full border border-(--color-border) text-(--color-muted-foreground)"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>
