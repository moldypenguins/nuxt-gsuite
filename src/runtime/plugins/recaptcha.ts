import { defineNuxtPlugin, useHead, useRuntimeConfig } from '#imports'

export default defineNuxtPlugin((_nuxtApp) => {
  const { gsuite } = useRuntimeConfig().public as any
  useHead({
    script: [
      {
        src: `https://www.google.com/recaptcha/api.js?render=${gsuite.recaptcha.siteKey}&trustedtypes=true`,
        async: true,
      },
    ],
  })
}) as any
