<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
<template>
<footer class="bg-green-800 text-white px-8 py-10 mt-10">       
<div class="flex flex-wrap justify-between gap-8">
<div>
<h3 class="text-yellow-300 font-bold text-lg mt-3">{{ $t('footer.brandTitle') }}</h3>
 <p class="text-sm text-green-200">{{ $t('footer.tagline') }}</p>
</div>              
<div>
 <h3 class="text-lg font-bold text-yellow-300 mt-3 mb-3">{{ $t('footer.quickLinks') }}</h3>
 <ul class="text-sm text-green-200 space-y-2">
<li><router-link to='/' class="hover:text-yellow-300">{{ $t('nav.home') }}</router-link></li>
<li><router-link to='/about' class="hover:text-yellow-300">{{ $t('nav.about') }}</router-link></li>
<li><router-link to='/gallery' class="hover:text-yellow-300">{{ $t('nav.gallery') }}</router-link></li>
<li><router-link to='/destination' class="hover:text-yellow-300">{{ $t('nav.destination') }}</router-link></li>
<li><router-link to='/service' class="hover:text-yellow-300">{{ $t('nav.service') }}</router-link></li>
</ul>
</div>
 <div>
<h3 class="text-lg font-bold text-yellow-300 mb-3">{{ $t('footer.destinations') }}</h3>
<ul class="space-y-2 text-sm">
<li><router-link to="/province/northern" class="hover:text-yellow-300">{{ $t('nav.northern') }}</router-link></li>
<li><router-link to="/province/southern" class="hover:text-yellow-300">{{ $t('nav.southern') }}</router-link></li>
<li><router-link to="/province/eastern" class="hover:text-yellow-300">{{ $t('nav.eastern') }}</router-link></li>
<li><router-link to="/province/western" class="hover:text-yellow-300">{{ $t('nav.western') }}</router-link></li>
 <li><router-link to="/province/kigali" class="hover:text-yellow-300">{{ $t('nav.kigali') }}</router-link></li></ul>
</div>
<div>
  <h3 class="text-lg font-bold text-yellow-300 mb-3">{{ $t('footer.contact') }}</h3>

  <ul class="space-y-2 text-sm">
    <li><a href="tel:+250780229205" class="hover:text-yellow-300">{{ $t('footer.phone') }}</a></li>
    <li><a href="mailto:cyusaivan0@gmail.com" class="hover:text-yellow-300">{{ $t('footer.email') }}</a></li>
    <li><span class="hover:text-yellow-300">{{ $t('footer.location') }}</span></li>
    <li><a href="https://www.temberaurwanda.rw" target="_blank" class="hover:text-yellow-300">{{ $t('footer.website') }}</a></li>
    <li><span class="hover:text-yellow-300">{{ $t('footer.support') }}</span></li>
  </ul>
</div>
<div class="border-t text-sm px-2 py-2 text-green-200 mt-8 w-full text-center">
       <p>{{ $t('footer.copy') }}</p>
</div>
</div>
</footer>
</template>
