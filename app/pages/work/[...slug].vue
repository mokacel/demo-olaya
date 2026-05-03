<script setup lang="ts">
const route = useRoute()
const { data: project } = await useAsyncData(`work-${route.path}`,
  () => queryCollection('work').path(route.path).first()
)

if (!project.value) throw createError({ statusCode: 404 })

useSeoMeta({ title: project.value.title, description: project.value.description })
</script>

<template>
  <article class="max-w-5xl mx-auto px-6 py-16">
    <div class="max-w-2xl mb-12">
      <BaseButton to="/work" variant="ghost" size="sm" class="mb-8 -ml-2">
        ← All work
      </BaseButton>
      <div class="flex flex-wrap gap-1.5 mb-4">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="text-xs px-2 py-0.5 rounded-full border border-(--color-border) text-(--color-muted-foreground)"
        >
          {{ tag }}
        </span>
      </div>
      <h1 class="font-serif text-4xl md:text-5xl font-semibold mb-4">{{ project.title }}</h1>
      <p class="text-lg text-(--color-muted-foreground) leading-relaxed">{{ project.description }}</p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-(--color-border) mb-12 text-sm">
      <div v-if="project.client">
        <p class="text-(--color-muted-foreground) text-xs mb-1">Client</p>
        <p class="font-medium">{{ project.client }}</p>
      </div>
      <div v-if="project.role">
        <p class="text-(--color-muted-foreground) text-xs mb-1">Role</p>
        <p class="font-medium">{{ project.role }}</p>
      </div>
      <div v-if="project.duration">
        <p class="text-(--color-muted-foreground) text-xs mb-1">Duration</p>
        <p class="font-medium">{{ project.duration }}</p>
      </div>
      <div v-if="project.technologies?.length">
        <p class="text-(--color-muted-foreground) text-xs mb-1">Technologies</p>
        <p class="font-medium">{{ project.technologies.join(', ') }}</p>
      </div>
    </div>

    <div v-if="project.image" class="rounded-xl overflow-hidden mb-12 bg-(--color-muted) aspect-video">
      <NuxtImg :src="project.image" :alt="project.title" class="w-full h-full object-cover" />
    </div>

    <div class="max-w-2xl">
      <ContentRenderer :value="project" class="prose prose-neutral dark:prose-invert max-w-none" />
    </div>
  </article>
</template>
