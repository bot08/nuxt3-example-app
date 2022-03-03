<template>
    <div>
        <h1 class="text-2xl font-bold text-gray-700 dark:text-gray-200 my-2">
            Hello world <StarIcon class="h-5 w-5 inline"/><br>
            Пример 
        </h1>
    </div>
</template>


<script>
import { StarIcon } from '@heroicons/vue/solid'

export default {
  components: {
    StarIcon
  }
}
</script>