import { defineNuxtPlugin, useHead, useRuntimeConfig } from '#imports'

export default defineNuxtPlugin({
  name: 'nuxt-gsuite-analytics',
  setup() {
    const { gsuite } = useRuntimeConfig().public
    useHead({
      script: [
        {
          src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${gsuite.adsense.clientId}`,
          async: true,
          crossorigin: 'anonymous',
        }
      ],
    })
  },
}) as any
