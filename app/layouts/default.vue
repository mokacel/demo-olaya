<script setup lang="ts">
import { brand } from '~/utils/brand'
</script>

<template>
  <div class="bg-(--color-background) text-(--color-foreground) font-sans min-h-dvh flex flex-col">
    <AppHeader :links="brand.nav" :cta="brand.cta" />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
