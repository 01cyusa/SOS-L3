<template>
  <section class="relative min-h-screen overflow-hidden">
    <img
      :src="backgroundImage"
      alt="Rwanda landscape"
      class="absolute inset-0 w-full h-full object-cover"
    />

    <div class="relative z-10 bg-black/10 text-white px-6 py-16 md:px-12 backdrop-blur-sm min-h-screen flex items-center">
      <div class="max-w-4xl mx-auto space-y-8">
        <div>
          <p class="text-sm uppercase tracking-[0.3em] text-green-200">About Rwanda</p>
          <h1 class="mt-4 text-4xl md:text-5xl font-extrabold">Discover Rwanda, the Land of a Thousand Hills</h1>
        </div>

        <div class="space-y-6 text-lg leading-relaxed text-slate-100">
          <p>
            Rwanda is a breathtaking country of rolling green hills, sparkling lakes, and rich cultural warmth. From the misty peaks of Volcanoes National Park to the tranquil shores of Lake Kivu, every view feels like a living postcard.
          </p>
          <p>
            Experience the magic of Rwanda through vibrant city life in Kigali, peaceful tea plantations, and unforgettable wildlife encounters. The country’s welcoming people, dramatic landscapes, and remarkable heritage make it one of Africa’s most beautiful destinations.
          </p>
          <p>
            At YVAN, we celebrate Rwanda’s beauty and invite you to explore its natural wonders, inspiring traditions, and the unforgettable moments that make this nation shine.
          </p>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <div class="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-xl shadow-black/20">
            <h2 class="text-xl font-semibold text-green-300">Stunning Nature</h2>
            <p class="mt-3 text-slate-200">
              Lush hills, dramatic valleys, peaceful lakes, and vibrant forests create Rwanda’s signature scenery.
            </p>
          </div>
          <div class="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-xl shadow-black/20">
            <h2 class="text-xl font-semibold text-green-300">Warm Hospitality</h2>
            <p class="mt-3 text-slate-200">
              Friendly communities, cultural experiences, and a welcoming spirit make every visit memorable.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import backgroundImage from "../assets/Image/YVAN.jpg"
</script>