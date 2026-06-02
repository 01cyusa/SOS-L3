<template>
    <div class="flex h-screen bg-gray-100">
        <!--a sidebar which will used to call the items content-->
        <aside class="w-68 bg-green-800 text-white flex flex-col">
            <div class="p-6 text-2xl font-bold border-b border-green-700">Dashboard</div>
            <nav class="flex-1 p-4">
                <button @click="activeMenu = 'overview'" :class="[activeMenu === 'overview' ? 'bg-green-700' : 'bg-green-800', 'w-full text-left px-4 py-3 rounded mb-2']">Overview</button>
                <button @click="activeMenu = 'booking'" :class="[activeMenu === 'booking' ? 'bg-green-700' : 'bg-green-800', 'w-full text-left px-4 py-3 rounded mb-2']">Booking</button>
                <button @click="activeMenu = 'users'" :class="[activeMenu === 'users' ? 'bg-green-700' : 'bg-green-800', 'w-full text-left px-4 py-3 rounded mb-2']">Users</button>
            </nav>
            <!--button for logout-->
            <div class="p-4 border-t border-green-700">
                <button @click="logout" class="w-full bg-red-600 hover:bg-red-800 px-4 py-2 rounded">Logout</button>
            </div>
        </aside>
        <main class="flex-1 p-8 overflow-auto">
            <section v-if="activeMenu === 'overview'">
                <h1 class="text-2xl font-semibold text-gray-800 mb-3">Overview</h1>
                <p class="text-sm text-gray-600 mb-6">Summary of recent activity and stats.</p>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                </div>
            </section>

            <section v-else-if="activeMenu === 'booking'">
                <h1 class="text-2xl font-semibold text-gray-800 mb-3">Bookings</h1>
                <p class="text-sm text-gray-600 mb-6">Recent booking activity and management.</p>
                <div class="bg-white p-6 rounded-lg shadow">
                    <p class="text-gray-700">No recent bookings to display.</p>
                </div>
            </section>

            <section v-else-if="activeMenu === 'users'">
                <h1 class="text-2xl font-semibold text-gray-800 mb-3">Users</h1>
                <p class="text-sm text-gray-600 mb-6">Manage and view user accounts.</p>
                <div class="bg-white p-6 rounded-lg shadow">
                    <p class="text-gray-700">No users found.</p>
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
    },
    methods: {
        logout() {
            // simple logout behavior: navigate to login
            if (this.$router) {
                this.$router.push('/login')
            }
        }
    }
}
</script>