<template>
    <div>
        <h1 class="text-2xl font-bold text-gray-700 dark:text-gray-200 my-2">
            About
        </h1>
        <NuxtLink to="/" class="text-xl font-bold text-green-700 dark:text-green-200">
            To index
        </NuxtLink>
        <NuxtLink target="_blank" to="https://github.com/bot08/nuxt3-example-app" class="block text-xl font-bold text-green-700 dark:text-green-200 my-2">
            Github
        </NuxtLink>
    </div>
</template>


<script setup>
useMeta({
  title: "about",
  meta: [
    { name: 'description', content: 'about page' }
  ]
})
definePageMeta({
  keepalive: true
})
</script>