// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
  ],
  site: {
    url: process.env.SITE_URL,
    name: process.env.SITE_NAME || 'Blazing Fast Static Blog Template',
    description:
      process.env.SITE_DESCRIPTION ||
      'A highly-optimized and SEO-friendly blog template',
    defaultLocale: 'en',
    indexable: process.env.NUXT_SITE_ENV === 'production',
  },
  schemaOrg: {
    identity: 'Organization',
  },
  googleFonts: {
    families: {
      Roboto: true,
    },
    preload: true,
  },
})
