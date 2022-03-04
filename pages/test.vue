<template>
  <!-- you'll need to handle a loading state -->
  <div v-if="pending">
    Loading ...
  </div>
  <div v-else>
    <div v-for="item in characters" :key="item.name">
      {{ item.name }} <br>
      {{ item.rarity }} <StarIcon class="h-5 w-5 inline"/>
    </div>
  </div>
</template>

<script setup>
// client side CORS error (JOSTY?)
const { pending, data: characters } = useLazyFetch('https://api-genshin.herokuapp.com/api/characters');

useMeta({
    title: "api fetch",
    meta: [
        { name: 'description', content: 'api page' }
    ]
})
</script>


<script>
import { StarIcon } from '@heroicons/vue/solid'

export default {
  components: {
    StarIcon
  }
}
</script>