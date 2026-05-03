<script setup lang="ts">
import { brand } from '~/utils/brand'

useSeoMeta({ title: `${brand.name} — Extra Virgin Olive Oil`, description: brand.description })

const oils = [
  {
    variety: 'Picual',
    name: 'Sierra Negra',
    description: "Our flagship. Robust, peppery, with a finish that lingers. Pressed within hours of harvest at peak ripeness. Exceptional raw — on bread, tomato, aged cheese.",
    volume: '500ml · 750ml',
    harvest: 'November'
  },
  {
    variety: 'Arbequina',
    name: 'Valle Suave',
    description: 'Gentle and fruity. Notes of fresh almond and green apple. The one our guests reach for first. Perfect for dressings, fish, and anything delicate.',
    volume: '500ml · 250ml',
    harvest: 'October'
  },
  {
    variety: 'Hojiblanca',
    name: 'Tierra Alta',
    description: 'Complex and balanced. Bitter and sweet in equal measure. A favourite among chefs for its versatility — equally at home in a marinade or finished over risotto.',
    volume: '500ml · 750ml',
    harvest: 'December'
  }
]

const craft = [
  {
    title: 'Hand-harvested',
    description: "Every olive is picked by hand. It takes longer. It costs more. It makes a difference you can taste."
  },
  {
    title: 'Same-day pressing',
    description: "From grove to mill within four hours of harvest. No storage, no waiting. The oil is as fresh as it gets."
  },
  {
    title: 'Cold extraction only',
    description: "We never exceed 27°C during extraction. Heat is the enemy of flavour. Cold pressing preserves everything."
  },
  {
    title: 'Estate bottled',
    description: "Blended, filtered, and bottled on the estate. We know exactly what's in every bottle because we made every part of it."
  }
]

const testimonials = [
  {
    quote: "The Sierra Negra is the best Picual I've worked with. It holds up to heat without losing its character — which almost none do.",
    name: 'Marcos Ibáñez',
    role: 'Head chef, Restaurante Caza'
  },
  {
    quote: "We switched our kitchen to Olaya two years ago and never looked back. The consistency from harvest to harvest is remarkable.",
    name: 'Leila Fontaine',
    role: 'Chef-owner, La Table du Marché'
  },
  {
    quote: "I keep a bottle of Valle Suave on the table at home. It's the kind of oil you taste, not just cook with.",
    name: 'Daniel Rowe',
    role: 'Food writer, The Observer'
  },
  {
    quote: "Olaya understands that great olive oil is a seasonal product. They treat it like wine. That rigour shows.",
    name: 'Ana Sousa',
    role: 'Buyer, Harrods Food Hall'
  }
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="pt-28 pb-12 md:pt-44 md:pb-16">
      <div class="max-w-5xl mx-auto px-6">
        <p class="text-xs font-sans tracking-[0.2em] uppercase text-(--color-muted-foreground) mb-8">
          Cazorla, Andalusia — Est. 1962
        </p>
        <h1 class="font-serif text-6xl md:text-8xl lg:text-9xl font-light italic leading-[0.95] tracking-[-0.02em] mb-10 max-w-4xl">
          {{ brand.tagline }}
        </h1>
        <div class="flex flex-wrap gap-4 items-center">
          <BaseButton :to="brand.cta.to" size="lg">{{ brand.cta.label }}</BaseButton>
          <BaseButton to="/about" variant="ghost" size="lg">Our estate →</BaseButton>
        </div>
      </div>
    </section>

    <!-- Grove image — full-bleed sense of place -->
    <div class="relative overflow-hidden" style="height: 68vh">
      <img
        src="/olive-grove.jpg"
        alt="The Olaya estate, Sierra de Cazorla"
        class="w-full h-full object-cover object-center scale-[1.02]"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-(--color-background) via-transparent to-transparent" />
    </div>

    <!-- Oils -->
    <section id="oils" class="py-24">
      <div class="max-w-5xl mx-auto px-6">
        <div class="grid md:grid-cols-3 gap-10 items-start">

          <!-- Product image — sticky as user scrolls through oils -->
          <div class="md:sticky md:top-24">
            <img
              src="/olive-oil.jpg"
              alt="Olaya extra virgin olive oil"
              class="w-full rounded-3xl object-cover"
              style="aspect-ratio: 3/4"
            />
          </div>

          <!-- Oils list -->
          <div class="md:col-span-2">
            <div class="flex items-end justify-between mb-14">
              <h2 class="font-serif text-4xl md:text-5xl font-light italic">The oils</h2>
              <span class="text-xs tracking-[0.15em] uppercase text-(--color-muted-foreground) font-sans">
                {{ new Date().getFullYear() }} harvest
              </span>
            </div>
            <div class="flex flex-col divide-y divide-(--color-border)">
              <div
                v-for="oil in oils"
                :key="oil.name"
                class="py-10"
              >
                <p class="text-xs tracking-[0.15em] uppercase text-(--color-muted-foreground) font-sans mb-2">{{ oil.variety }}</p>
                <h3 class="font-serif text-3xl font-light italic mb-1">{{ oil.name }}</h3>
                <p class="text-xs text-(--color-muted-foreground) font-sans mb-4">Harvest: {{ oil.harvest }}</p>
                <p class="text-sm text-(--color-muted-foreground) leading-relaxed font-sans mb-5">
                  {{ oil.description }}
                  <span class="block mt-3 text-xs tracking-wide">{{ oil.volume }}</span>
                </p>
                <BaseButton to="/#contact" size="sm">Order {{ oil.name }}</BaseButton>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Craft — olives texture background with frosted card -->
    <section id="how" class="relative overflow-hidden border-y border-(--color-border) min-h-[75vh] flex items-center py-16">
      <img
        src="/olives.jpg"
        alt=""
        aria-hidden="true"
        class="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-black/15" />
      <div class="relative w-full max-w-5xl mx-auto px-6">
        <div class="bg-[#f6f0e4]/88 backdrop-blur-md rounded-3xl px-10 py-14 md:px-16 md:py-16 border border-white/30 shadow-xl">
          <h2 class="font-serif text-4xl md:text-5xl font-light italic mb-16">How it's made</h2>
          <div class="grid md:grid-cols-2 gap-x-16 gap-y-10 mb-14">
            <div v-for="(item, i) in craft" :key="item.title" class="flex gap-6">
              <span class="font-serif text-4xl font-light text-(--color-border) leading-none shrink-0 mt-1">
                {{ String(i + 1).padStart(2, '0') }}
              </span>
              <div>
                <h3 class="font-sans font-medium text-sm mb-2">{{ item.title }}</h3>
                <p class="text-sm text-(--color-muted-foreground) leading-relaxed font-sans">{{ item.description }}</p>
              </div>
            </div>
          </div>
          <BaseButton :to="brand.cta.to" size="lg">Shop the harvest</BaseButton>
        </div>
      </div>
    </section>

    <!-- Testimonials on olive-branch image -->
    <section class="relative overflow-hidden min-h-[75vh] flex items-center py-24">
      <img
        src="/olive-branch.jpg"
        alt=""
        aria-hidden="true"
        class="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-black/62" />
      <div class="relative w-full max-w-5xl mx-auto px-6">
        <h2 class="font-serif text-4xl md:text-5xl font-light italic text-white mb-16">What people say</h2>
        <div class="grid md:grid-cols-2 gap-10 mb-16">
          <figure v-for="item in testimonials" :key="item.name" class="flex flex-col gap-5">
            <blockquote class="font-serif text-xl font-light italic leading-relaxed text-white/90">
              "{{ item.quote }}"
            </blockquote>
            <figcaption class="text-xs font-sans tracking-wide text-white/50">
              <span class="font-medium not-italic text-white/70">{{ item.name }}</span>
              <span class="mx-2 opacity-40">—</span>
              {{ item.role }}
            </figcaption>
          </figure>
        </div>
        <BaseButton :to="brand.cta.to" size="lg" variant="white">
          Order now
        </BaseButton>
      </div>
    </section>
    <SectionContact />
  </div>
</template>
