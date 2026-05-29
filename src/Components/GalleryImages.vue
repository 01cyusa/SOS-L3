<template>
  <section class="p-6">
    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Images</h2>
    <p class="text-green-600 font-semibold mb-6">Click an image to view larger. Each image shows its province below.</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div v-for="item in images" :key="item.label" class="rounded overflow-hidden shadow-lg bg-white">
        <img :src="item.src" :alt="item.label" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h3 class="font-bold text-gray-800">{{ item.label }}</h3>
          <p class="text-sm text-gray-600 mt-1">Location: {{ item.province }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import North from '../assets/Image/North.jpg'
import South from '../assets/Image/South.jpg'
import East from '../assets/Image/East.jpg'
import West from '../assets/Image/West.jpg'
import Kigali from '../assets/Image/Kigali.jpg'

export default {
  name: 'GalleryImages',
  data() {
    return {
      images: [
        { src: North, label: 'North', province: 'Northern' },
        { src: South, label: 'South', province: 'Southern' },
        { src: East, label: 'East', province: 'Eastern' },
        { src: West, label: 'West', province: 'Western' },
        { src: Kigali, label: 'Kigali', province: 'Kigali City' }
      ]
    }
  }
}
</script>

<style scoped>
img { display: block }
</style>
