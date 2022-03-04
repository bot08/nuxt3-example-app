<template>
    <div>
        <h1 class="text-2xl font-bold text-gray-700 dark:text-gray-200 my-2">
            Hello world <StarIcon class="h-5 w-5 inline"/><br>
            Пример 
        </h1>
        <NuxtLink to="/about" class="text-xl font-bold text-green-700 dark:text-green-200 my-2">
            About page
        </NuxtLink>
    </div>
</template>


<script>
import { StarIcon } from '@heroicons/vue/solid'

export default {
  components: {
    StarIcon
  },

  setup () {
    useMeta({
      title: "nuxt3 app",
      meta: [
        { name: 'description', content: 'index page' }
      ]
    })
  }
}
</script>