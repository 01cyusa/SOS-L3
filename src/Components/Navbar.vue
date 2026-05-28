<template>
        <nav class="bg-green-800 text-white px-8 py-4 flex items-center justify between-shadow-lg">
            <img src="../assets/Image/Logo.jpg" alt="Logo" class="w-12 h-12 mr-4">
        <span class="text-xl font-bold "></span>

        <ul class="flex gap-8 text-sm font-medium w-full justify-end">
            <li><router-link to="/" class="hover:text-yellow-400 no-underline">HOME</router-link></li>
            <li><router-link to="/about" class="hover:text-yellow-400 no-underline">ABOUT US</router-link></li>
            <li><router-link to="/service" class="hover:text-yellow-400 no-underline">SERVICE</router-link></li>
             <li class="relative group">
  <router-link to="/gallery" class="hover:text-yellow-300 inline-flex items-center gap-1 no-underline">
    GALLERY <span>⌄</span>
  </router-link>

  <ul
    class="absolute left-0 top-full invisible opacity-0
           group-hover:visible group-hover:opacity-100
           transition duration-300
           bg-white py-2 w-40 rounded shadow-lg"
  >
    <li>
      <a
        href="#"
        class="block px-4 py-2 text-black hover:bg-green-700 hover:text-white no-underline"
      >
        Videos
      </a>
    </li>

    <li>
      <a
        href="#"
        class="block px-4 py-2 text-black hover:bg-green-700 hover:text-white no-underline"
      >
        Image
      </a>
    </li>
  </ul>
</li>
        
              <li class="relative group">
  <router-link to="/destination" class="hover:text-yellow-300 inline-flex items-center gap-1 no-underline">
    DESTINATION <span>⌄</span>
  </router-link>

  <ul
    class="absolute left-0 top-full invisible opacity-0
           group-hover:visible group-hover:opacity-100
           transition duration-300
           bg-white py-2 w-40 rounded shadow-lg"
  >
    <li>
      <a href="#" class="block px-4 py-2 text-black hover:bg-green-700 hover:text-white no-underline">Western province</a>
    </li>
    <li>
      <a href="#" class="block px-4 py-2 text-black hover:bg-green-700 hover:text-white no-underline">Eastern province</a>
    </li>
    <li>
      <a href="#" class="block px-4 py-2 text-black hover:bg-green-700 hover:text-white no-underline">Northern province</a>
    </li>
    <li>
      <a href="#" class="block px-4 py-2 text-black hover:bg-green-700 hover:text-white no-underline">Southern province</a>
    </li>
    <li>
      <a href="#" class="block px-4 py-2 text-black hover:bg-green-700 hover:text-white no-underline">Kigali City</a>
    </li>
  </ul>
</li>
            <li><router-link to="/contact" class="hover:text-yellow-400 no-underline">CONTACT</router-link></li>
        </ul>
        </nav>
    </template>
