<template>
        <nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-lg">
            <img src="../assets/Image/Logo.jpg" alt="Logo" class="w-12 h-12 mr-4">
        <span class="text-xl font-bold "></span>

        <ul class="flex gap-8 text-sm font-medium w-full justify-end">
            <li><router-link to="/" class="hover:text-yellow-400 no-underline">HOME</router-link></li>
            <li><router-link to="/about" class="hover:text-yellow-400 no-underline">ABOUT US</router-link></li>
            <li><router-link to="/service" class="hover:text-yellow-400 no-underline">SERVICE</router-link></li>
             <li class="relative group overflow-visible z-50">
  <button type="button" class="hover:text-yellow-300 inline-flex items-center gap-1 no-underline">
    GALLERY <span>⌄</span>
  </button>

  <ul
    class="absolute left-0 top-full invisible opacity-0 translate-y-2
           group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
           transition-all duration-300
           bg-white py-2 min-w-[10rem] rounded shadow-lg z-50"
  >
    <li>
      <router-link to="/gallery" class="block px-4 py-2 text-black hover:bg-green-700 hover:text-white no-underline">Gallery Home</router-link>
    </li>
    <li>
      <button type="button" class="block w-full text-left px-4 py-2 text-black hover:bg-green-700 hover:text-white no-underline">Videos</button>
    </li>
    <li>
      <button type="button" class="block w-full text-left px-4 py-2 text-black hover:bg-green-700 hover:text-white no-underline">Images</button>
    </li>
  </ul>
</li>
        
              <li class="relative group overflow-visible z-50">
  <button type="button" class="hover:text-yellow-300 inline-flex items-center gap-1 no-underline">
    DESTINATION <span>⌄</span>
  </button>

  <ul
    class="absolute left-0 top-full invisible opacity-0 translate-y-2
           group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
           transition-all duration-300
           bg-white py-2 min-w-[10rem] rounded shadow-lg z-50"
  >
    <li>
      <router-link to="/destination" class="block px-4 py-2 text-black hover:bg-green-700 hover:text-white no-underline">Destination Home</router-link>
    </li>
    <li>
      <router-link to="/province/western" class="block px-4 py-2 text-black hover:bg-green-700 hover:text-white no-underline">Western province</router-link>
    </li>
    <li>
      <router-link to="/province/eastern" class="block px-4 py-2 text-black hover:bg-green-700 hover:text-white no-underline">Eastern province</router-link>
    </li>
    <li>
      <router-link to="/province/northern" class="block px-4 py-2 text-black hover:bg-green-700 hover:text-white no-underline">Northern province</router-link>
    </li>
    <li>
      <router-link to="/province/southern" class="block px-4 py-2 text-black hover:bg-green-700 hover:text-white no-underline">Southern province</router-link>
    </li>
    <li>
      <router-link to="/province/kigali" class="block px-4 py-2 text-black hover:bg-green-700 hover:text-white no-underline">Kigali City</router-link>
    </li>
  </ul>
</li>
            <li><router-link to="/contact" class="hover:text-yellow-400 no-underline">CONTACT</router-link></li>
        </ul>
        </nav>
    </template>
