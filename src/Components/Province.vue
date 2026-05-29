<template>
  <div class="province-wrapper">
    <component :is="provinceComponent" />
  </div>
</template>

<script>
import NorthernProvince from './NorthernProvince.vue'
import SouthernProvince from './SouthernProvince.vue'
import EasternProvince from './EasternProvince.vue'
import WesternProvince from './WesternProvince.vue'
import KigaliProvince from './KigaliProvince.vue'

export default {
  name: 'Province',
  computed: {
    provinceSlug() {
      return this.$route.params.province?.toLowerCase();
    },
    provinceComponent() {
      const mapping = {
        northern: NorthernProvince,
        southern: SouthernProvince,
        eastern: EasternProvince,
        western: WesternProvince,
        kigali: KigaliProvince
      }
      return mapping[this.provinceSlug] || NorthernProvince
    }
  }
}
</script>

<style scoped>
.province-wrapper {
  margin-top: 2rem;
}
</style>
