<template>
  <section class="bg-white shadow-sm rounded-lg p-6">
    <h2 class="text-2xl font-semibold text-gray-800">{{ $t('videos.title') }}</h2>
    <p class="mt-2 text-green-600 font-semibold text-lg mb-6">{{ $t('videos.subtitle') }}</p>

    <div class="space-y-6">
      <div class="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/sVwpIa4k9bo?autoplay=1&mute=1&rel=0"
          title="Video 1"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowfullscreen
        ></iframe>
      </div>

      <div class="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/5FVO3IHwIzw?autoplay=1&mute=1&rel=0"
          title="Video 2"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Videos'
}
</script>

<style scoped>
.video-wrapper {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 */
}
.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
