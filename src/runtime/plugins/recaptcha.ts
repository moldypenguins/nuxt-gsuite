import { defineNuxtPlugin, useHead, useRuntimeConfig } from '#imports'

export default defineNuxtPlugin((_nuxtApp) => {
  const { gsuite } = useRuntimeConfig().public
  useHead({
    script: [
      {
        src: `https://www.google.com/recaptcha/api.js?render=${gsuite.recaptcha.siteKey}`,
        async: true,
      },
    ],
  })
}) as any
