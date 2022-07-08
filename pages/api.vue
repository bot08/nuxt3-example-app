<template>
  <div>
    <!-- you'll need to handle a loading state -->
    <div v-if="pending">
      Loading ...
    </div>

    <div v-else>
      <div v-for="item in characters" :key="item.name" class="text-gray-900 dark:text-gray-100">   
        {{ item.name }} {{ item.rarity }} <StarIcon class="h-5 w-5 inline"/>
      </div>
    </div>

    <NuxtLink to="/" class="text-xl font-bold text-green-700 dark:text-green-200 my-2">
      Home page
    </NuxtLink>
  </div>
</template>

<script setup>
import { StarIcon } from '@heroicons/vue/solid'

const { pending, data: characters } = useLazyFetch('https://api-genshin.herokuapp.com/api/characters')

watch(characters, (newCharacters) => {
  // Because posts starts out null, you won't have access
  // to its contents immediately, but you can watch it.
})
</script>