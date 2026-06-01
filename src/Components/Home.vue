<template>
  <div class="home-container" :style="{ backgroundImage: `url(${yvanImage})` }">
    <div class="content-overlay">
      <div class="home-content text-center px-4">
        <h1 class="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
          {{ $t('home.heroTitle') }}
        </h1>
        <p class="home-subtext text-white text-lg md:text-xl max-w-2xl mx-auto mb-8">
          {{ $t('home.heroText') }}
        </p>
        <div class="button-group flex flex-col sm:flex-row justify-center gap-4">
          <button @click="goGallery" class="btn btn-explore px-8 py-3 font-semibold rounded-full">
            {{ $t('home.explorePhotos') }}
          </button>
          <button @click="goAbout" class="btn btn-learn px-8 py-3 font-semibold rounded-full">
            {{ $t('home.learnMore') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import yvanImage from '../assets/Image/RWANDA.jpg'

const router = useRouter()
const goGallery = () => router.push('/gallery/images')
const goAbout = () => router.push('/about')
</script>

<style scoped>
.home-container {
  width: 100%;
  height: 600px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-overlay {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
}

h1 {
  z-index: 10;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
}

.home-content {
  z-index: 10;
}

.home-subtext {
  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.6);
}

.btn {
  cursor: pointer;
  transition: all 0.25s ease;
}

.btn-explore {
  background-color: #22c55e;
  color: white;
  border: 2px solid transparent;
}

.btn-explore:hover {
  background-color: #16a34a;
}

.btn-learn {
  background-color: transparent;
  color: white;
  border: 2px solid white;
}

.btn-learn:hover {
  background-color: white;
  color: #111827;
}
</style>
