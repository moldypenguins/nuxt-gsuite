export declare interface RecaptchaResponse {
  'success': boolean
  'challenge_ts'?: string
  'hostname'?: string
  'score'?: number
  'action'?: string
  'error-codes'?: string[]
}

export interface NuxtGSuiteOptions {
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
}
