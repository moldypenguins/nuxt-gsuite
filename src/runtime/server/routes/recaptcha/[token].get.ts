import { defineEventHandler, getRouterParam, useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const { recaptcha } = useRuntimeConfig().gsuite
  const token = getRouterParam(event, 'token')

  const verification = await $fetch<RecaptchaResponse>(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${recaptcha.secretKey}&response=${token}`,
  })

  if (verification.success === false) {
    if (verification['error-codes'] && verification['error-codes'].length > 0) {
      return { valid: false, errors: verification['error-codes'] }
    }
    else {
      return { valid: false, errors: ['Unknown Error.'] }
    }
  }
  else if (verification.success === true && verification.score && verification.score < recaptcha.minScore) {
    return { valid: false, errors: ['Suspected Bot.'] }
  }

  return { valid: true }
})
