<script setup lang="ts">
defineProps<{
  title?: string
  items: {
    quote: string
    name: string
    role: string
    company?: string
  }[]
}>()
</script>

<template>
  <section class="py-20 border-t border-(--color-border)">
    <div class="max-w-5xl mx-auto px-6">
      <h2 v-if="title" class="font-serif text-3xl md:text-4xl font-semibold mb-12">
        {{ title }}
      </h2>
      <div class="grid md:grid-cols-2 gap-6">
        <figure
          v-for="item in items"
          :key="item.name"
          class="border border-(--color-border) rounded-xl p-6 flex flex-col gap-6"
        >
          <blockquote class="text-(--color-foreground)/80 leading-relaxed flex-1">
            "{{ item.quote }}"
          </blockquote>
          <figcaption class="text-sm">
            <span class="font-medium">{{ item.name }}</span>
            <span class="text-(--color-muted-foreground)"> — {{ item.role }}<template v-if="item.company">, {{ item.company }}</template></span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
