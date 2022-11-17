<template>
  <div>
      <h1 class="text-2xl font-bold text-gray-700 dark:text-gray-200 my-2">
          404
      </h1>
      <NuxtLink to="/" class="text-xl font-bold text-green-700 dark:text-green-200 my-2">
          To home
      </NuxtLink>
  </div>
</template>


<script setup>
setResponseStatus(404)

useHead({
  title: "404 - Not Found",
  meta: [
    { name: 'description', content: '404 page' }
  ]
})
</script>