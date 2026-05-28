<template>
  <div class="home-container" :style="{ backgroundImage: `url(${yvanImage})` }">
    <div class="content-overlay">
      <h1 class="text-4xl font-bold text-center text-white drop-shadow-lg mt-20">
        TEMBERA U RWANDA
      </h1>
    </div>
  </div>
</template>

<script>
import yvanImage from '../assets/Image/RWANDA.jpg'

export default {
  name: 'Home',
  data() {
    return {
      yvanImage
    }
  }
}
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
</style>
