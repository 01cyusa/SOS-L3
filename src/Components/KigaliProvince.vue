<template>
  <section :style="{ backgroundImage: `url(${bgImage})` }" class="shadow-sm rounded-lg p-6 province-bg">
    <h2 class="text-3xl font-bold text-white mb-4">Kigali City</h2>
    <p class="text-lg text-green-200 font-semibold mb-4">This Rwanda's capital city </p>
    <div class="bg-green-50 p-6 rounded-lg">
      <h3 class="text-xl font-bold text-green-700 mb-3">About Kigali City</h3>
      <p class="text-gray-700 mb-4">
        This Rwanda's capital city 
      </p>
      <div class="mt-6">
        <h4 class="text-lg font-bold text-green-700 mb-3">Key Attractions:</h4>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>Kigali Genocide Memorial</li>
          <li>Inema Arts Center</li>
          <li>Kimironko Market</li>
          <li>Kigali Convention Centre</li>
          <li>Modern restaurants and entertainment venues</li>
        </ul>
      </div>
    </div>
    <div class="mt-8">
      <router-link 
        to="/destination" 
        class="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Back to Destinations
      </router-link>
    </div>
  </section>
</template>

<script>
import kigaliImg from '../assets/Image/Kigali.jpg'

export default {
  name: 'KigaliProvince',
  data() {
    return {
      bgImage: kigaliImg
    }
  }
}
</script>

<style scoped>
.province-bg {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
}
</style>
