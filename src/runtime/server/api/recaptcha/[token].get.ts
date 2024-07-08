import type { RecaptchaResponse } from '~/src/types'
import { defineEventHandler, getRouterParam, useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const { recaptcha } = useRuntimeConfig().gsuite
  const token = getRouterParam(event, 'token')

  return await $fetch<RecaptchaResponse>(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${recaptcha.secretKey}&response=${token}`,
  })
})
