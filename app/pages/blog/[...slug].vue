<script setup lang="ts">
const route = useRoute()
const { data: post } = await useAsyncData(`blog-${route.path}`,
  () => queryCollection('blog').path(route.path).first()
)

if (!post.value) throw createError({ statusCode: 404 })

useSeoMeta({ title: post.value.title, description: post.value.description })

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<template>
  <article class="max-w-5xl mx-auto px-6 py-16">
    <div class="max-w-2xl mx-auto">
      <BaseButton to="/blog" variant="ghost" size="sm" class="mb-8 -ml-2">
        ← All posts
      </BaseButton>

      <div class="flex flex-wrap gap-1.5 mb-4">
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="text-xs px-2 py-0.5 rounded-full border border-(--color-border) text-(--color-muted-foreground)"
        >
          {{ tag }}
        </span>
      </div>

      <h1 class="font-serif text-4xl md:text-5xl font-semibold mb-4 leading-tight">{{ post.title }}</h1>
      <p class="text-lg text-(--color-muted-foreground) mb-6 leading-relaxed">{{ post.description }}</p>

      <div class="flex items-center gap-3 text-sm text-(--color-muted-foreground) border-b border-(--color-border) pb-8 mb-10">
        <time :datetime="post.date">{{ formatDate(post.date) }}</time>
        <span v-if="post.minRead">· {{ post.minRead }} min read</span>
      </div>

      <ContentRenderer :value="post" class="prose prose-neutral dark:prose-invert max-w-none" />
    </div>
  </article>
</template>
