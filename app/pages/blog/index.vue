<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-all',
  () => queryCollection('blog').where('published', '=', true).order('date', 'DESC').all()
)

useSeoMeta({ title: 'Blog', description: 'Thoughts, process notes, and writing.' })
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 py-16">
    <h1 class="font-serif text-5xl md:text-6xl font-semibold mb-4">Blog</h1>
    <p class="text-(--color-muted-foreground) mb-16 max-w-lg">Thoughts, process notes, and writing.</p>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <CardBlog
        v-for="post in posts"
        :key="post.path"
        :title="post.title"
        :description="post.description"
        :date="post.date"
        :tags="post.tags"
        :image="post.image"
        :to="post.path"
        :min-read="post.minRead"
      />
    </div>

    <p v-if="!posts?.length" class="text-center py-24 text-(--color-muted-foreground)">No posts yet.</p>
  </div>
</template>
