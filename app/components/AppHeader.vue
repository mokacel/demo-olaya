<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next'
import { brand } from '~/utils/brand'

defineProps<{
  links: { label: string; to: string }[]
  cta: { label: string; to: string }
}>()

const isOpen = ref(false)
</script>

<template>
  <header class="border-b border-(--color-border) sticky top-0 z-50 bg-(--color-background)/80 backdrop-blur-sm">
    <div class="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
      <NuxtLink to="/" class="font-serif text-3xl font-bold italic tracking-tight" style="color: var(--color-olive)">
        Ólaya
      </NuxtLink>

      <!-- Desktop nav -->
      <ul class="hidden md:flex items-center gap-6 text-sm">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="text-(--color-muted-foreground) hover:text-(--color-foreground) transition-colors"
            active-class="text-(--color-foreground)"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>

      <div class="hidden md:flex items-center gap-3">
        <BaseButton :to="cta.to" size="sm">{{ cta.label }}</BaseButton>
      </div>

      <!-- Mobile -->
      <div class="flex md:hidden items-center gap-2">
        <button class="p-2 rounded-lg hover:bg-(--color-muted) transition-colors" @click="isOpen = true">
          <Menu class="size-5" />
        </button>
      </div>
    </div>

    <!-- Mobile menu overlay -->
    <Transition name="fade">
      <div v-if="isOpen" class="fixed inset-0 z-50 bg-black/40" @click="isOpen = false" />
    </Transition>
    <Transition name="slide">
      <div v-if="isOpen" class="fixed inset-y-0 right-0 z-50 w-72 bg-(--color-background) border-l border-(--color-border) p-6 flex flex-col gap-6">
        <button class="self-end p-2 rounded-lg hover:bg-(--color-muted) transition-colors" @click="isOpen = false">
          <X class="size-5" />
        </button>
        <ul class="flex flex-col gap-4 text-lg">
          <li v-for="link in links" :key="link.to">
            <NuxtLink :to="link.to" @click="isOpen = false">{{ link.label }}</NuxtLink>
          </li>
        </ul>
        <BaseButton :to="cta.to" class="w-full justify-center" @click="isOpen = false">
          {{ cta.label }}
        </BaseButton>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.slide-enter-active, .slide-leave-active { transition: transform 0.25s ease; }
.slide-enter-from, .slide-leave-to { transform: translateX(100%); }
</style>
