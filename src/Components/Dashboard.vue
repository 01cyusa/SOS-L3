<template>
  <div class="flex h-screen bg-gray-100">
    <aside class="w-64 bg-green-800 text-white flex flex-col">
      <div class="p-7 text-2xl font-bold border-b border-green-700">Dashboard</div>
      <nav class="flex-1 p-4">
        <button
          @click="activeMenu = 'overview'"
          :class="[
            'block w-full text-left p-2 hover:bg-green-700 rounded',
            activeMenu === 'overview' ? 'bg-green-700' : 'bg-green-800'
          ]"
        >
          Overview
        </button>
      </nav>
    </aside>
    <main class="flex-1 p-8">
      <header class="mb-6">
        <h1 class="text-2xl font-semibold text-gray-800">Overview</h1>
        <p class="text-sm text-gray-600">Welcome to your dashboard. Summary of recent activity:</p>
      </header>

      <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-lg font-medium text-gray-700">Users</h2>
          <p class="text-3xl font-bold text-green-700 mt-3">1,254</p>
          <p class="text-sm text-gray-500 mt-2">Active users in the last 30 days</p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-lg font-medium text-gray-700">Sessions</h2>
          <p class="text-3xl font-bold text-green-700 mt-3">3,482</p>
          <p class="text-sm text-gray-500 mt-2">Total sessions this month</p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-lg font-medium text-gray-700">Conversions</h2>
          <p class="text-3xl font-bold text-green-700 mt-3">214</p>
          <p class="text-sm text-gray-500 mt-2">Signups from campaigns</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      activeMenu: 'overview'
    }
  }
}
</script>