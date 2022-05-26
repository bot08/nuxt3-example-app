<template>
    <div>
        <h1 class="text-2xl font-bold text-gray-700 dark:text-gray-200 my-2">
            Hello world <StarIcon class="h-5 w-5 inline"/><br>
            Пример 
        </h1>
        <NuxtLink to="/about" class="text-xl font-bold text-green-700 dark:text-green-200 my-2">
            About page
        </NuxtLink>
        <hr class="my-2 border-gray-300 dark:border-gray-500">
        <!-- ref -->
        <h1 class="text-2xl font-bold text-gray-700 dark:text-gray-200 my-2">
            {{ count }}
        </h1>
        <button @click="count++" class="items-center m-2 text-center px-7 py-1 shadow-lg text-base font-medium text-white transition ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 dark:hover:bg-indigo-700 focus:outline-none">count ++</button>
        <!-- useState -->
        <h1 class="text-2xl font-bold text-gray-700 dark:text-gray-200 my-2">
            {{ counter }}
        </h1>
        <button @click="counter++" class="items-center m-2 text-center px-7 py-1 shadow-lg text-base font-medium text-white transition ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 dark:hover:bg-indigo-700 focus:outline-none">count ++</button>
    </div>
</template>


<script setup>
import { StarIcon } from '@heroicons/vue/solid'

useHead({
  title: "nuxt3 app",
  meta: [
    { name: 'description', content: 'index page' }
  ]
})

const count = ref(0)
const counter = useState('counter', () => 0)

</script>