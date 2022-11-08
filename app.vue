<template>
  <NuxtLayout>
    <NuxtPage keepalive/>
  </NuxtLayout>
</template>


<script setup>
// const color = ref(useColorMode().value);

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  bodyAttrs: {
    class: 'min-h-screen bg-gray-100 dark:bg-gray-800 transition-colors'
  },
  // meta: [
  //   { name: 'theme-color', content: (useColorMode().value == 'light' ? 'light' : 'dark') }
  // ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})

// watch(() => $route, (to, from) => {
//   const fromPage = () => useState(from.name);
//   alert(fromPage);
// });
</script>