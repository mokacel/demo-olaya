<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(`page-${route.path}`,
  () => queryCollection('pages').path(route.path).first()
)

if (!page.value) throw createError({ statusCode: 404 })

useSeoMeta({
  title: page.value.seo?.title ?? page.value.title,
  description: page.value.seo?.description ?? page.value.description
})
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 py-16">
    <div class="max-w-2xl mx-auto">
      <h1 class="font-serif text-4xl md:text-5xl font-semibold mb-8">{{ page.title }}</h1>
      <ContentRenderer :value="page" class="prose prose-neutral dark:prose-invert max-w-none" />
    </div>
  </div>
</template>
