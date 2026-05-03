<script setup lang="ts">
// TODO: migrate variants to CVA (class-variance-authority) for typed, composable styling
// See: https://cva.style — same pattern shadcn-vue uses

defineProps<{
  variant?: 'primary' | 'ghost' | 'outline' | 'white'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit'
  to?: string
  loading?: boolean
  disabled?: boolean
}>()

const variantClass = {
  primary: 'border border-primary-500 text-primary-500 bg-transparent hover:bg-primary-500 hover:text-white focus-visible:ring-primary-500 transition-all duration-200',
  ghost: 'bg-transparent text-(--color-foreground) hover:bg-(--color-muted)',
  outline: 'border border-(--color-border) bg-transparent hover:bg-(--color-muted)',
  white: 'border border-white/60 text-white bg-transparent hover:bg-white hover:text-(--color-foreground) focus-visible:ring-white transition-all duration-200'
}

const sizeClass = {
  sm: 'px-4 py-1.5 text-sm rounded-full gap-1.5 tracking-wide',
  md: 'px-5 py-2 text-sm rounded-full gap-2 tracking-wide',
  lg: 'px-7 py-3 text-base rounded-full gap-2 tracking-wide'
}
</script>

<template>
  <component
    :is="to ? resolveComponent('NuxtLink') : 'button'"
    :to="to"
    :type="to ? undefined : (type ?? 'button')"
    :disabled="disabled || loading"
    :class="[
      'inline-flex items-center justify-center font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      variantClass[variant ?? 'primary'],
      sizeClass[size ?? 'md']
    ]"
  >
    <slot />
  </component>
</template>
