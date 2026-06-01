<template>
  <section class="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="relative z-10 bg-black/20 text-white px-6 py-16 md:px-12 backdrop-blur-sm min-h-screen flex items-center">
      <div class="max-w-4xl mx-auto space-y-8">
        <div>
          <p class="text-sm uppercase tracking-[0.3em] text-green-200">{{ $t('destination.sectionTitle') }}</p>
          <h1 class="mt-4 text-4xl md:text-5xl font-extrabold">{{ $t('destination.headline') }}</h1>
        </div>

        <div class="space-y-6 text-lg leading-relaxed text-slate-100">
          <p>{{ $t('destination.paragraph1') }}</p>
          <p>{{ $t('destination.paragraph2') }}</p>
          <p>{{ $t('destination.paragraph3') }}</p>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <div class="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-xl shadow-black/20">
            <h2 class="text-xl font-semibold text-green-300">{{ $t('destination.card1Title') }}</h2>
            <p class="mt-3 text-slate-200">{{ $t('destination.card1Text') }}</p>
          </div>
          <div class="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-xl shadow-black/20">
            <h2 class="text-xl font-semibold text-green-300">{{ $t('destination.card2Title') }}</h2>
            <p class="mt-3 text-slate-200">{{ $t('destination.card2Text') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import backgroundImage from "../assets/Image/YVAN.jpg"
</script>