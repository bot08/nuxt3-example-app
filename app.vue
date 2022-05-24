<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>


<script setup>
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  bodyAttrs: {
    class: 'min-h-screen bg-gray-100 dark:bg-gray-800 transition-colors'
  },
  // meta: [
  //   { name: 'theme-color', content: '#fff' }
  // ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>