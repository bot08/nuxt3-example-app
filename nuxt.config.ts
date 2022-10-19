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

  // example
  // routeRules: {
  //   // Static page generated on-demand, revalidates in background
  //   '/blog/**': { swr: true },
  //   // Static page generated on-demand once
  //   '/articles/**': { static: true },
  //   // Set custom headers matching paths
  //   '/_nuxt/**': { headers: { 'cache-control': 's-maxage=0' } },
  //   // Render these routes with SPA
  //   '/admin/**': { ssr: false },
  //   // Add cors headers
  //   '/api/v1/**': { cors: true },
  //   // Add redirect headers
  //   '/old-page': { redirect: '/new-page' },
  //   '/old-page2': { redirect: { to: '/new-page', statusCode: 302 } }
  // }

  routeRules: {
    // Static page generated on-demand, revalidates in background
    '/api': { swr: true },
    // Static page generated on-demand once
    '/': { static: true },
    // Set custom headers matching paths
    '/_nuxt/**': { headers: { 'cache-control': 's-maxage=86400' } },
  }
})