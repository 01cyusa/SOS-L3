<template>
        <nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-lg">
            <img src="../assets/Image/Logo.jpg" alt="Logo" class="w-12 h-12 mr-4">
        <span class="text-xl font-bold "></span>

        <ul class="flex gap-8 text-sm font-medium w-full justify-end">
          <li><router-link to="/" class="hover:text-yellow-400 no-underline">{{ $t('nav.home') }}</router-link></li>
          <li><router-link to="/about" class="hover:text-yellow-400 no-underline">{{ $t('nav.about') }}</router-link></li>
          <li><router-link to="/service" class="hover:text-yellow-400 no-underline">{{ $t('nav.service') }}</router-link></li>
          <li><router-link to="/dashboard" class="hover:text-yellow-400 no-underline">{{ $t('nav.dashboard') }}</router-link></li>
          <li class="relative group overflow-visible z-50">
            <button type="button" class="hover:text-yellow-300 inline-flex items-center gap-1 no-underline">
              {{ $t('nav.gallery') }} <span>⌄</span>
            </button>

            <ul
              class="absolute left-0 top-full invisible opacity-0 translate-y-2
                     group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                     transition-all duration-300
                     bg-white py-2 min-w-[10rem] rounded shadow-lg z-50"
            >
              <li>
                <router-link to="/gallery" class="block px-4 py-2 text-black hover:bg-green-700 hover:text-white no-underline">{{ $t('nav.galleryHome') }}</router-link>
              </li>
              <li>
                <router-link to="/videos" class="block px-4 py-2 text-black hover:bg-green-700 hover:text-white no-underline">{{ $t('nav.videos') }}</router-link>
              </li>
              <li>
                <router-link to="/gallery/images" class="block px-4 py-2 text-black hover:bg-green-700 hover:text-white no-underline">{{ $t('nav.images') }}</router-link>
              </li>
            </ul>
          </li>
              <li class="relative group overflow-visible z-50">
  <button type="button" class="hover:text-yellow-300 inline-flex items-center gap-1 no-underline">
    {{ $t('nav.destination') }} <span>⌄</span>
  </button>

  <ul
    class="absolute left-0 top-full invisible opacity-0 translate-y-2
           group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
           transition-all duration-300
           bg-white py-2 min-w-[10rem] rounded shadow-lg z-50"
  >
    <li>
      <router-link to="/destination" class="block px-4 py-2 text-black hover:bg-green-700 hover:text-white no-underline">{{ $t('nav.destinationHome') }}</router-link>
    </li>
    <li>
      <router-link to="/province/western" class="block px-4 py-2 text-black hover:bg-green-700 hover:text-white no-underline">{{ $t('nav.western') }}</router-link>
    </li>
    <li>
      <router-link to="/province/eastern" class="block px-4 py-2 text-black hover:bg-green-700 hover:text-white no-underline">{{ $t('nav.eastern') }}</router-link>
    </li>
    <li>
      <router-link to="/province/northern" class="block px-4 py-2 text-black hover:bg-green-700 hover:text-white no-underline">{{ $t('nav.northern') }}</router-link>
    </li>
    <li>
      <router-link to="/province/southern" class="block px-4 py-2 text-black hover:bg-green-700 hover:text-white no-underline">{{ $t('nav.southern') }}</router-link>
    </li>
    <li>
      <router-link to="/province/kigali" class="block px-4 py-2 text-black hover:bg-green-700 hover:text-white no-underline">{{ $t('nav.kigali') }}</router-link>
    </li>
  </ul>
</li>
            <li><router-link to="/login" class="hover:text-yellow-400 no-underline">Login</router-link></li>
            <li><router-link to="/contact" class="hover:text-yellow-400 no-underline">{{ $t('nav.contact') }}</router-link></li>
            <li class="relative group overflow-visible z-50">
  <button type="button" class="hover:text-yellow-300 inline-flex items-center gap-1 no-underline">
    {{ $t('nav.language') }} <span>⌄</span>
  </button>

  <ul
    class="absolute left-0 top-full invisible opacity-0 translate-y-2
           group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
           transition-all duration-300
           bg-white py-2 min-w-[8rem] rounded shadow-lg z-50"
  >
    <li>
      <button @click="changeLang('en')" class="block px-4 py-2 text-black hover:bg-green-700 hover:text-white w-full text-left">{{ $t('nav.english') }}</button>
    </li>
    <li>
      <button @click="changeLang('fr')" class="block px-4 py-2 text-black hover:bg-green-700 hover:text-white w-full text-left">{{ $t('nav.french') }}</button>
    </li>
    <li>
      <button @click="changeLang('rw')" class="block px-4 py-2 text-black hover:bg-green-700 hover:text-white w-full text-left">{{ $t('nav.kinyarwanda') }}</button>
    </li>
  </ul>
</li>
        </ul>
        </nav>
    </template>

<script>
export default {
  name: 'Navbar',
  methods: {
    changeLang(lang) {
      if (this.$i18n) {
        this.$i18n.locale = lang
      }
    }
  }
}
</script>
