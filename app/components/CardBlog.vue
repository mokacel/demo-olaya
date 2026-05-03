<script setup lang="ts">
defineProps<{
  title: string
  description: string
  date: string
  tags?: string[]
  image?: string
  to: string
  minRead?: number
}>()

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<template>
  <NuxtLink :to="to" class="group flex flex-col gap-4">
    <div v-if="image" class="overflow-hidden rounded-lg bg-(--color-muted) aspect-video">
      <NuxtImg
        :src="image"
        :alt="title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>

    <div class="flex flex-col gap-2">
      <div class="flex items-center gap-2 text-xs text-(--color-foreground)/40">
        <time :datetime="date">{{ formatDate(date) }}</time>
        <span v-if="minRead">· {{ minRead }} min read</span>
      </div>
      <h3 class="font-medium leading-snug group-hover:text-primary-500 transition-colors">{{ title }}</h3>
      <p class="text-sm text-(--color-foreground)/60 leading-relaxed line-clamp-2">{{ description }}</p>
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
