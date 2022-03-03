<template>
    <div>
        <h1 class="text-2xl font-bold text-gray-700 dark:text-gray-200 my-2">
            About
        </h1>
        <NuxtLink to="/" class="text-xl font-bold text-green-700 dark:text-green-200 my-2">
            To index
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
      title: "about" 
    })
  }
}
</script>