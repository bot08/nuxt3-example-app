import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/color-mode',
        '@nuxtjs/tailwindcss'
      ],

    tailwindcss: {
        exposeConfig: true
      },

    colorMode: {
        classSuffix: ''
      },

    css: [
        '~/assets/css/style.css'
      ]
})