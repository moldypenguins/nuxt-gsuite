import { ref, watch } from 'vue'
import { useHead, useRuntimeConfig } from '#imports'

const hidden = ref(false)

watch(hidden, (value) => {
  useHead({
    style: [
      {
        key: `recaptcha-badge`,
        innerHTML: `.grecaptcha-badge{display:${value ? 'none' : 'block'}!important;}`,
      },
    ],
  })
})

const toggleBadge = (value: boolean) => hidden.value = value

export function useRecaptcha() {
  const { gsuite } = useRuntimeConfig().public

  const execute = async (action: string) => await grecaptcha.execute(gsuite.recaptcha.siteKey, { action })

  const verify = async (token: string) => await $fetch<RecaptchaResponse>(`/recaptcha/${token}`)

  return {
    hidden,
    execute,
    verify,
    toggleBadge,
    hideBadge: () => toggleBadge(true),
    showBadge: () => toggleBadge(false),
    config: gsuite,
  }
}
