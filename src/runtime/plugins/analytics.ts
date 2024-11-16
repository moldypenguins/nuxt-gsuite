import { defineNuxtPlugin, useHead, useRuntimeConfig } from '#imports'

export default defineNuxtPlugin({
  name: 'nuxt-gsuite-analytics',
  setup() {
    const { gsuite } = useRuntimeConfig().public as any
    useHead({
      script: [
        {
          src: `https://www.googletagmanager.com/gtag/js?id=${gsuite.analytics.measurementId}`,
          async: true,
        },
        {
          innerHTML: `window.dataLayer = window.dataLayer || [];`
          + ` function gtag(){dataLayer.push(arguments);}`
          + ` gtag('js', new Date());`
          + ` gtag('config', '${gsuite.analytics.measurementId}');`,
        },
      ],
    })
  },
}) as any
