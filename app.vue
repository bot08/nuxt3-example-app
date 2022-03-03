<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>


<script>
export default {
  setup () {
    useMeta({
      htmlAttrs: {
        lang: 'en'
      },
      bodyAttrs: {
        class: 'min-h-screen bg-gray-100 dark:bg-gray-800 transition-colors'
      }
    })
  }
}
</script>