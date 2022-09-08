<template>
  <div>
    <!-- you'll need to handle a loading state -->
    <div v-if="pending">
      Loading ...
    </div>

    <div v-else>
      <div v-for="item in characters" :key="item.name" class="text-gray-900 dark:text-gray-100">   
        {{ item.name }} {{ item.rarity }} <!-- <StarIcon class="h-5 w-5 inline"/> -->
      </div>
    </div>

    <button @click="origin = 'https://sushicat.pp.ua/api/genshin/api/collections/get/charactersv2?sort[rarity]=-1&fields[name]=1&fields[nameeng]=1&fields[rarity]=1&fields[ico]=1&token=a4191046104f8f3674f788e804c2d0';" class="text-xl font-bold text-green-700 dark:text-green-200 my-2">
      To OLD API
    </button>
    <br/>
    <NuxtLink to="/" class="text-xl font-bold text-green-700 dark:text-green-200 my-2">
      Home page
    </NuxtLink>
  </div>
</template>

<script setup>
//import { StarIcon } from '@heroicons/vue/solid'
const origin = ref('https://api-genshin.herokuapp.com/api/characters')

const { pending, data: characters } = useLazyFetch(origin);

watch(characters, (newCharacters) => {
  // Because posts starts out null, you won't have access
  // to its contents immediately, but you can watch it.
})
</script>