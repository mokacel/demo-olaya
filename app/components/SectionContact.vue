<script setup lang="ts">
import { CheckCircle } from 'lucide-vue-next'
import { brand } from '~/utils/brand'

const form = reactive({ name: '', email: '', message: '' })
const submitted = ref(false)
const loading = ref(false)

async function submit() {
  loading.value = true
  // Replace with your form handler: Resend, Netlify Forms, Formspree, etc.
  await new Promise(r => setTimeout(r, 800))
  submitted.value = true
  loading.value = false
}
</script>

<template>
  <section id="contact" class="py-24 border-t border-(--color-border)">
    <div class="max-w-lg mx-auto px-6 text-center">
      <h2 class="font-serif text-4xl md:text-5xl font-light italic mb-4">
        Let's talk.
      </h2>
      <p class="text-(--color-muted-foreground) leading-relaxed mb-2 text-sm">
        Whether you're a restaurant, a retailer, or simply curious about what goes into every bottle, we'd love to hear from you. We work directly with chefs and buyers, and we're always open to wholesale conversations.
      </p>
      <a :href="`mailto:${brand.contact.email}`" class="text-primary-500 hover:underline text-sm block mb-10">
        {{ brand.contact.email }}
      </a>

      <form v-if="!submitted" class="flex flex-col gap-3 text-left" @submit.prevent="submit">
        <BaseInput v-model="form.name" placeholder="Your name" />
        <BaseInput v-model="form.email" type="email" placeholder="Email address" />
        <BaseTextarea v-model="form.message" placeholder="Tell us what you're looking for: wholesale, a specific variety, a question about the harvest…" :rows="5" />
        <BaseButton type="submit" size="lg" :disabled="loading" class="w-full justify-center mt-1">
          {{ loading ? 'Sending…' : 'Get in touch' }}
        </BaseButton>
      </form>

      <div v-else class="flex flex-col items-center gap-2 py-8">
        <CheckCircle class="size-8 text-primary-500" />
        <p class="font-medium">Thank you — message received.</p>
        <p class="text-sm text-(--color-muted-foreground)">Someone from the estate will be in touch within a day or two.</p>
      </div>
    </div>
  </section>
</template>
