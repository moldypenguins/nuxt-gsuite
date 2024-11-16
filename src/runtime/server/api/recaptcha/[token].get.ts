import { defineEventHandler, getRouterParam, useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const { gsuite } = useRuntimeConfig().gsuite
  const token = getRouterParam(event, 'token')

  return { gsuite, token }
})
