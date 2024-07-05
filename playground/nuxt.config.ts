export default defineNuxtConfig({
  modules: ['../src/module', '@nuxt/eslint'],
  /*
  gsuite: {
    recaptcha: {
      siteKey: '[GSUITE_RECAPTCHA_SITEKEY]',
      secretKey: '[GSUITE_RECAPTCHA_SECRETKEY]',
    },
    analytics: {
      measurementId: '[GSUITE_ANALYTICS_MEASUREMENTID]'
    }
  },
  */
  devtools: { enabled: true },
  compatibilityDate: '2024-07-04',
})
