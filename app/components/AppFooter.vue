<script setup lang="ts">
import { brand } from '~/utils/brand'

const year = new Date().getFullYear()

const socialLinks = computed(() =>
  Object.entries(brand.social)
    .filter(([, url]) => url)
    .map(([platform, url]) => ({ platform, url }))
)
</script>

<template>
  <footer class="border-t border-(--color-border) mt-24">
    <div class="max-w-5xl mx-auto px-6">
      <div class="py-12 flex flex-col md:flex-row justify-between gap-8">
        <div class="max-w-xs">
          <p class="font-serif text-lg font-semibold mb-2">{{ brand.name }}</p>
          <p class="text-sm text-(--color-muted-foreground)">{{ brand.description }}</p>
        </div>

        <div class="flex flex-col gap-2 text-sm">
          <p class="font-medium mb-1">Navigation</p>
          <NuxtLink
            v-for="link in brand.nav"
            :key="link.to"
            :to="link.to"
            class="text-(--color-muted-foreground) hover:text-(--color-foreground) transition-colors"
          >
            {{ link.label }}
          </NuxtLink>
        </div>

        <div class="flex flex-col gap-2 text-sm">
          <p class="font-medium mb-1">Contact</p>
          <a
            :href="`mailto:${brand.contact.email}`"
            class="text-(--color-muted-foreground) hover:text-(--color-foreground) transition-colors"
          >
            {{ brand.contact.email }}
          </a>
          <p v-if="brand.contact.location" class="text-(--color-muted-foreground)">
            {{ brand.contact.location }}
          </p>
          <div v-if="socialLinks.length" class="flex gap-3 mt-2">
            <a
              v-for="{ platform, url } in socialLinks"
              :key="platform"
              :href="url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-(--color-muted-foreground) hover:text-(--color-foreground) transition-colors capitalize text-xs"
            >
              {{ platform }}
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-(--color-border) py-6 text-xs text-(--color-muted-foreground)">
        © {{ year }} {{ brand.name }}. All rights reserved.
      </div>
    </div>
  </footer>
</template>
