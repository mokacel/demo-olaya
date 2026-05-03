<script setup lang="ts">
const { data: projects } = await useAsyncData('work-all',
  () => queryCollection('work').order('date', 'DESC').all()
)

useSeoMeta({ title: 'Work', description: 'Selected projects and case studies.' })
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 py-16">
    <h1 class="font-serif text-5xl md:text-6xl font-semibold mb-4">Work</h1>
    <p class="text-(--color-muted-foreground) mb-16 max-w-lg">
      Selected projects. Each one is a collaboration — different briefs, different constraints, same standard.
    </p>
    <div class="grid md:grid-cols-2 gap-12">
      <CardWork
        v-for="item in projects"
        :key="item.path"
        :title="item.title"
        :description="item.description"
        :image="item.image"
        :tags="item.tags"
        :to="item.path"
        :year="String(new Date(item.date).getFullYear())"
        :role="item.role"
      />
    </div>
  </div>
</template>
