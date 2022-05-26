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

        <LoadImage>
          <template v-slot:image>
              <img class="h-72 sm:h-96 m-auto rounded-xl mt-4" src="https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg" alt="paimon-portret">
          </template>
          <template v-slot:preloader> 
              <div class="h-72 sm:h-96 mx-auto sm:mt-4 mb-4 sm:mb-0 pt-28">
                <svg class="mx-auto animate-spin text-gray-400 h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="spin"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              </div>
          </template>
          <template v-slot:error>
              <div class="h-72 sm:h-96 mx-auto mt-3 pt-28"></div>
          </template>
        </LoadImage>
    </div>
</template>


<script setup>
useHead({
  title: "about",
  meta: [
    { name: 'description', content: 'about page' }
  ]
})
</script>