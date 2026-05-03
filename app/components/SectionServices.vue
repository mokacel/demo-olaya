<script setup lang="ts">
defineProps<{
  title?: string
  items: {
    title: string
    description: string
  }[]
}>()
</script>

<template>
  <section class="py-20 border-t border-(--color-border)">
    <div class="max-w-5xl mx-auto px-6">
      <h2 v-if="title" class="font-serif text-3xl md:text-4xl font-semibold mb-12">
        {{ title }}
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="item in items" :key="item.title" class="flex flex-col gap-3">
          <h3 class="font-medium">{{ item.title }}</h3>
          <p class="text-sm text-(--color-muted-foreground) leading-relaxed">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
