<template>
  <section :style="bgStyle" class="max-w-6xl mx-auto px-6 py-10 bg-cover bg-center">
    <div class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <div class="space-y-6">
        <h2 class="text-3xl font-bold text-gray-900">{{ $t('contact.title') }}</h2>
        <p class="text-lg text-gray-600">{{ $t('contact.intro') }}</p>

        <div class="grid gap-4 sm:grid-cols-2">
          <div class="rounded-3xl border border-green-200 bg-green-50 p-6">
            <h3 class="text-xl font-semibold text-green-800">{{ $t('contact.phoneTitle') }}</h3>
            <p class="mt-2 text-gray-700">+250 780 229 205</p>
          </div>
          <div class="rounded-3xl border border-green-200 bg-green-50 p-6">
            <h3 class="text-xl font-semibold text-green-800">{{ $t('contact.emailTitle') }}</h3>
            <p class="mt-2 text-gray-700">cyusaivan0@gmail.com</p>
          </div>
          <div class="rounded-3xl border border-green-200 bg-green-50 p-6">
            <h3 class="text-xl font-semibold text-green-800">{{ $t('contact.locationTitle') }}</h3>
            <p class="mt-2 text-gray-700">Kigali, Kagugu, Rwanda</p>
          </div>
          <div class="rounded-3xl border border-green-200 bg-green-50 p-6">
            <h3 class="text-xl font-semibold text-green-800">{{ $t('contact.websiteTitle') }}</h3>
            <p class="mt-2 text-gray-700">www.temberaurwanda.rw</p>
          </div>
        </div>

        <div class="rounded-3xl border border-green-200 bg-white/90 p-6 shadow-sm">
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">{{ $t('contact.socialTitle') }}</h3>
          <ul class="space-y-3 text-gray-700">
            <li>
              <a href="https://www.instagram.com/temberaurwanda" target="_blank" class="text-green-700 hover:text-green-900">
                {{ $t('contact.instagram') }} — {{ $t('contact.instagramHandle') }}
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/temberaurwanda" target="_blank" class="text-green-700 hover:text-green-900">
                {{ $t('contact.facebook') }} — {{ $t('contact.facebookHandle') }}
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/tembera-rwanda" target="_blank" class="text-green-700 hover:text-green-900">
                {{ $t('contact.linkedin') }} — {{ $t('contact.linkedinHandle') }}
              </a>
            </li>
            <li>
              <a href="https://wa.me/250780229205" target="_blank" class="text-green-700 hover:text-green-900">
                {{ $t('contact.whatsapp') }} — {{ $t('contact.whatsappNumber') }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="rounded-3xl border border-green-200 bg-white p-6 shadow-sm">
        <h3 class="text-2xl font-semibold text-gray-900 mb-4">{{ $t('contact.formTitle') }}</h3>
        <form @submit.prevent="sendMessage" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">{{ $t('contact.nameLabel') }}</label>
            <input v-model="form.name" type="text" class="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3" :placeholder="$t('contact.namePlaceholder')" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">{{ $t('contact.emailLabel') }}</label>
            <input v-model="form.email" type="email" class="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3" :placeholder="$t('contact.emailPlaceholder')" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">{{ $t('contact.subjectLabel') }}</label>
            <input v-model="form.subject" type="text" class="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3" :placeholder="$t('contact.subjectPlaceholder')" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">{{ $t('contact.messageLabel') }}</label>
            <textarea v-model="form.message" rows="5" class="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3" :placeholder="$t('contact.messagePlaceholder')"></textarea>
          </div>
          <button type="submit" class="inline-flex items-center justify-center rounded-full bg-green-700 px-6 py-3 text-white transition hover:bg-green-800">
            {{ $t('contact.sendButton') }}
          </button>
          <p v-if="status" class="text-sm text-green-700">{{ status }}</p>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { reactive, ref } from 'vue'
import Hotel from '../assets/Image/Hotel.jpg'

export default {
  name: 'Contact',
  setup() {
    const bgStyle = {
      backgroundImage: `url(${Hotel})`
    }

    const form = reactive({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    const status = ref('')

    const sendMessage = function() {
      if (!form.email || !form.message) {
        status.value = this.$t('contact.statusEmpty')
        return
      }

      const subject = encodeURIComponent(form.subject || this.$t('contact.formTitle'))
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
      window.location.href = `mailto:cyusaivan0@gmail.com?subject=${subject}&body=${body}`
      status.value = this.$t('contact.statusPrepping')
    }

    return {
      bgStyle,
      form,
      status,
      sendMessage
    }
  }
}
</script>
