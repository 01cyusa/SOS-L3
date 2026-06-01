<template>
  <div class="bg-white">

    <!-- Hero Section -->
    <section class="bg-green-800 text-white py-24 text-center">

      <h1 class="text-5xl md:text-6xl font-bold mb-6">
        {{ $t('service.heroTitle') }}
      </h1>

      <p class="max-w-3xl mx-auto text-lg text-green-100">
        {{ $t('service.heroText') }}
      </p>

    </section>

    <!-- Services Grid -->
    <section class="py-20 px-8">

      <div class="max-w-7xl mx-auto">

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition">
            <img src="../assets/Image/Gorilla.jpg" alt="Gorilla Trekking">
            <div class="p-6">
              <h2 class="text-xl font-bold text-green-800 mb-3">{{ $t('service.cards.gorilla.title') }}</h2>
              <p class="text-gray-600">{{ $t('service.cards.gorilla.description') }}</p>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition">
            <img src="../assets/Image/elephat.jpg" alt="Safari">
            <div class="p-6">
              <h2 class="text-xl font-bold text-green-800 mb-3">{{ $t('service.cards.safari.title') }}</h2>
              <p class="text-gray-600">{{ $t('service.cards.safari.description') }}</p>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition">
            <img src="../assets/Image/image cam.jpg" alt="Culture">
            <div class="p-6">
              <h2 class="text-xl font-bold text-green-800 mb-3">{{ $t('service.cards.culture.title') }}</h2>
              <p class="text-gray-600">{{ $t('service.cards.culture.description') }}</p>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition">
            <img src="../assets/Image/Kigali.jpg" alt="City Tour">
            <div class="p-6">
              <h2 class="text-xl font-bold text-green-800 mb-3">{{ $t('service.cards.city.title') }}</h2>
              <p class="text-gray-600">{{ $t('service.cards.city.description') }}</p>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition">
            <img src="../assets/Image/Mount.jpg" alt="Hiking">
            <div class="p-6">
              <h2 class="text-xl font-bold text-green-800 mb-3">{{ $t('service.cards.hiking.title') }}</h2>
              <p class="text-gray-600">{{ $t('service.cards.hiking.description') }}</p>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition">
            <img src="../assets/Image/Hotel.jpg" alt="Bird Watching">
            <div class="p-6">
              <h2 class="text-xl font-bold text-green-800 mb-3">{{ $t('service.cards.bird.title') }}</h2>
              <p class="text-gray-600">{{ $t('service.cards.bird.description') }}</p>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition">
            <img src="../assets/Image/Radisson.jpg" alt="Camping">
            <div class="p-6">
              <h2 class="text-xl font-bold text-green-800 mb-3">{{ $t('service.cards.camping.title') }}</h2>
              <p class="text-gray-600">{{ $t('service.cards.camping.description') }}</p>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition">
            <img src="../assets/Image/RWANDA.jpg" alt="Photography">
            <div class="p-6">
              <h2 class="text-xl font-bold text-green-800 mb-3">{{ $t('service.cards.photography.title') }}</h2>
              <p class="text-gray-600">{{ $t('service.cards.photography.description') }}</p>
            </div>
          </div>

        </div>

      </div>

    </section>

  </div>
</template>

<script>
export default {
  name: 'Service'
}
</script>