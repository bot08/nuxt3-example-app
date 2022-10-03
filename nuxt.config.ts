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
  
  build: {
    transpile: ['@heroicons/vue']
  },

  css: [
    '~/assets/css/style.css'
  ],

  // https://github.com/nuxt/framework/discussions/515
  // routes: {
  //   '/': { prerender: true }, // Once per build (via builder)
  //   '/blog/*': { static: true }, // Once on-demand per build (via lambda)
  //   '/stats/*': { swr: '10 min' }, // Once on-demand each 10 minutes (via lambda)
  //   '/admin/*': { ssr: false }, // Client-Side rendered
  //   '/react/*': { redirect: '/vue' }, // Redirect Rules
  // }
})