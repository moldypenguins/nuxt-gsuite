[![nuxt-gsuite][logo-src]][npm-href]
# nuxt-gsuite  
### Nuxt 3 Google Module  

[![NPM Version][npm-version-src]][npm-href]
[![NPM Downloads][npm-downloads-src]][npm-href]
[![License][license-src]][npm-href]  
[![Open Issues][openissues-src]][github-href]
[![Open Pull Requests][pullrequests-src]][github-href]
[![Last Commit][lastcommit-src]][github-href]  
[![Nuxt][nuxt-src]][nuxt-href]
![CodeQL][codeql-src]
![ESLint][eslint-src]
![Dependabot][dependabot-src]
[![GitHub Sponsors][sponsors-src]][sponsors-href]
---

## Table of Contents

- [Setup](#setup)
- [Author](#author)
- [License](#license)

## Setup

Install the module to your Nuxt application:  
```bash
pnpm i -D nuxt-gsuite
```

Add the module to your `nuxt.config.ts`:  
```typescript
export default defineNuxtConfig({
  modules: [
    ...,
    'nuxt-gsuite',
  ],
  gsuite: {
    recaptcha: {
      siteKey: '[GSUITE_RECAPTCHA_SITEKEY]',
      secretKey: '[GSUITE_RECAPTCHA_SECRETKEY]',
    },
    analytics: {
      measurementId: '[GSUITE_ANALYTICS_MEASUREMENTID]',
    },
  },
})
```

## Author

_**Craig Roberts**_  
[![GitHub](https://img.shields.io/badge/moldypenguins-6e5494?labelColor=555555&logo=github&style=for-the-badge)](https://github.com/moldypenguins)
[![Discord](https://img.shields.io/badge/@moldypenguins-5865F2?labelColor=555555&logo=discord&style=for-the-badge)](https://discordapp.com/users/346771877211144194)
[![Telegram](https://img.shields.io/badge/@moldypenguins-27A7E7?labelColor=555555&logo=telegram&style=for-the-badge)](https://t.me/moldypenguins)

## License

Copyright © 2024 CR Development. Licensed under the MIT license.  
See [LICENSE.md](LICENSE.md) or [https://opensource.org/license/mit](https://opensource.org/license/mit) for more details

<!-- Badges -->
[logo-src]: https://raw.githubusercontent.com/moldypenguins/nuxt-gsuite/master/.github/images/nuxt-gsuite.png
[npm-version-src]: https://img.shields.io/npm/v/nuxt-gsuite/latest.svg?style=for-the-badge&color=CD0000&logo=npm&logoColor=white
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-gsuite.svg?style=for-the-badge&color=CD0000&logo=npm&logoColor=white
[license-src]: https://img.shields.io/npm/l/nuxt-gsuite.svg?style=for-the-badge&color=CD0000&logo=npm&logoColor=white
[npm-href]: https://npmjs.com/package/nuxt-gsuite

[openissues-src]: https://img.shields.io/github/issues-raw/moldypenguins/nuxt-gsuite?style=for-the-badge&logo=GitHub
[pullrequests-src]: https://img.shields.io/github/issues-pr-raw/moldypenguins/nuxt-gsuite?style=for-the-badge&logo=GitHub
[lastcommit-src]: https://img.shields.io/github/last-commit/moldypenguins/nuxt-gsuite?style=for-the-badge&logo=GitHub
[github-href]: https://github.com/moldypenguins/nuxt-gsuite

[nuxt-src]: https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82
[nuxt-href]: https://nuxt.com
[codeql-src]: https://img.shields.io/badge/CodeQL-30363D?style=for-the-badge&logo=github&logoColor=white
[eslint-src]: https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white
[dependabot-src]: https://img.shields.io/badge/dependabot-025E8C?style=for-the-badge&logo=dependabot&logoColor=white
[sponsors-src]: https://img.shields.io/badge/sponsor-30363D?style=for-the-badge&logo=GitHub-Sponsors&logoColor=EA4AAA
[sponsors-href]: https://github.com/sponsors/moldypenguins
