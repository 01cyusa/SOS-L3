<template>
  <section class="bg-white shadow-sm rounded-lg p-6">
    <h2 class="text-3xl font-bold text-gray-800 mb-4">{{ provinceTitle }}</h2>
    <p class="text-lg text-green-600 font-semibold mb-4">This is {{ provinceTitle }} Province</p>
    
    <div class="bg-green-50 p-6 rounded-lg">
      <h3 class="text-xl font-bold text-green-700 mb-3">About {{ provinceTitle }}</h3>
      <p class="text-gray-700 mb-4">
        {{ provinceDescription }}
      </p>
      
      <div class="mt-6">
        <h4 class="text-lg font-bold text-green-700 mb-3">Key Attractions:</h4>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li v-for="attraction in attractions" :key="attraction">
            {{ attraction }}
          </li>
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
export default {
  name: 'Province',
  data() {
    return {
      provinces: {
        northern: {
          title: 'Northern',
          description: 'This is Northern Province',
          attractions: [
            'Volcanoes National Park with mountain gorilla trekking',
            'Lake Ruhondo and Lake Muhazi',
            'Gishwati-Mukura National Park',
            'Musanze Caves',
            'Traditional cultural tours'
          ]
        },
        southern: {
          title: 'Southern',
          description: 'This is Southern Province',
          attractions: [
            'Lake Kivu with stunning water views',
            'Nyungwe Forest National Park',
            'Tea plantations and tours',
            'Busishi Island',
            'Cultural heritage sites'
          ]
        },
        eastern: {
          title: 'Eastern',
          description: 'This is Eastern Province',
          attractions: [
            'Akagera National Park for safari',
            'Lake Mihindi and Lake Mugesera',
            'Wetland reserves and bird watching',
            'Traditional village tours',
            'Adventure activities'
          ]
        },
        western: {
          title: 'Western',
          description: 'This is WESTERN PROVINCE',
          attractions: [
            'Lake Kivu water activities and beaches',
            'Nyungwe Forest National Park',
            'Karongi town and waterfront',
            'Cocoa plantations',
            'Water sports and leisure activities'
          ]
        },
        kigali: {
          title: 'Kigali City',
          description: 'This Rwanda\'s capital city ',
          attractions: [
            'Kigali Genocide Memorial',
            'Inema Arts Center',
            'Kimironko Market',
            'Kigali Convention Centre',
            'Modern restaurants and entertainment venues'
          ]
        }
      }
    }
  },
  computed: {
    provinceSlug() {
      return this.$route.params.province.toLowerCase();
    },
    provinceTitle() {
      const province = this.provinces[this.provinceSlug];
      return province ? province.title : 'Province';
    },
    provinceDescription() {
      const province = this.provinces[this.provinceSlug];
      return province ? province.description : 'Welcome to this province!';
    },
    attractions() {
      const province = this.provinces[this.provinceSlug];
      return province ? province.attractions : [];
    }
  }
}
</script>

<style scoped>
section {
  margin-top: 2rem;
}
</style>
