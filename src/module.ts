import process from 'node:process'
import { addComponent, addImports, addPlugin, addServerHandler, createResolver, defineNuxtModule, logger } from '@nuxt/kit'
import defu from 'defu'

export { type RecaptchaResponse } from './types'

declare module '#app' {
  const grecaptcha: any
  const adsbygoogle: any

  interface Window {
    grecaptcha: any
    adsbygoogle: any
  }
}

export interface ModuleOptions {
  recaptcha?: {
    /**
     *  Site key for Recaptcha.
     *
     * @default process.env.GSUITE_RECAPTCHA_SITEKEY
     *
     */
    siteKey: string
    /**
     *  Secret key for Recaptcha.
     *
     * @default process.env.GSUITE_RECAPTCHA_SECRETKEY
     *
     */
    secretKey?: string
    /**
     *  Minimum score to use for Recaptcha verification.
     *
     * @default 0.5
     *
     */
    minScore?: number
    /**
     *  Version of Recaptcha to use.
     *
     * @default 'v3'
     *
     */
    version?: string
  }
  analytics?: {
    /**
     *  Measurement Id for Analytics.
     *
     * @default process.env.GSUITE_ANALYTICS_MEASUREMENTID
     *
     */
    measurementId: string
  }
  adsense?: {
    /**
     *  Client Id for Adsense.
     *
     * @default process.env.GSUITE_ADSENSE_CLIENTID
     *
     */
    clientId: string
  }
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-gsuite',
    configKey: 'gsuite',
  },
  // Default configuration options of the Nuxt module
  defaults: {
    recaptcha: {
      siteKey: process.env.GSUITE_RECAPTCHA_SITEKEY as string,
      secretKey: process.env.GSUITE_RECAPTCHA_SECRETKEY as string,
      minScore: 0.5,
      version: 'v3',
    },
    analytics: {
      measurementId: process.env.GSUITE_ANALYTICS_MEASUREMENTID as string,
    },
    adsense: {
      clientId: process.env.GSUITE_ADSENSE_CLIENTID as string,
    },
  },
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    // add adsense
    if (_options.adsense?.clientId && _options.adsense?.clientId?.length > 0) {
      // add public options
      _nuxt.options.runtimeConfig.public.gsuite = defu(_nuxt.options.runtimeConfig.public.gsuite || {}, {
        adsense: {
          clientId: _options.adsense.clientId,
        },
      })
      // add plugin
      addPlugin(resolver.resolve('./runtime/plugins/adsense'))
      // add component
      addComponent({
        name: 'AdUnit',
        export: 'default',
        filePath: resolver.resolve('./runtime/components/AdUnit'),
        // global: true
      })
    }
    else {
      logger.warn('A client id is required for Adsense. Plugin will not be loaded.')
    }

    // add analytics
    if (_options.analytics?.measurementId && _options.analytics?.measurementId?.length > 0) {
      // add public options
      _nuxt.options.runtimeConfig.public.gsuite = defu(_nuxt.options.runtimeConfig.public.gsuite || {}, {
        analytics: {
          measurementId: _options.analytics.measurementId,
        },
      })
      // add plugin
      addPlugin(resolver.resolve('./runtime/plugins/analytics'))
    }
    else {
      logger.warn('A measurement id is required for Analytics. Plugin will not be loaded.')
    }

    // add recaptcha
    if (_options.recaptcha?.siteKey && _options.recaptcha?.siteKey?.length > 0) {
      // add public options
      _nuxt.options.runtimeConfig.public.gsuite = defu(_nuxt.options.runtimeConfig.public.gsuite || {}, {
        recaptcha: {
          siteKey: _options.recaptcha.siteKey,
          version: _options.recaptcha.version,
        },
      })
      // add private options
      _nuxt.options.runtimeConfig.gsuite = defu(_nuxt.options.runtimeConfig.gsuite || {}, {
        recaptcha: {
          secretKey: _options.recaptcha.secretKey,
          minScore: _options.recaptcha.minScore,
        },
      })
      // add plugin
      addPlugin(resolver.resolve('./runtime/plugins/recaptcha'))
      // add compostable
      addImports({
        name: 'useRecaptcha',
        as: 'useRecaptcha',
        from: resolver.resolve('./runtime/compostables/useRecaptcha'),
      })
      // add route
      addServerHandler({
        route: '/api/recaptcha/:token',
        handler: resolver.resolve('./runtime/server/api/recaptcha/[token].get'),
      })
    }
    else {
      logger.warn('A site key is required for reCAPTCHA. Plugin and route will not be loaded.')
    }

    logger.success('`nuxt-gsuite` is ready!')
  },

})
