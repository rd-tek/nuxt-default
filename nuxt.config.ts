// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-01-05',
  devtools: { enabled: false },
  devServer: {
    host: process.env.NUXT_HOST || '192.168.10.222',
    port: Number(process.env.NUXT_PORT || 3000),
    hot: true,
  },
  css: [
    '@/assets/scss/base/common.scss',
    '@/assets/scss/base/reset.scss',
    '@/assets/scss/base/variables.scss',
  ],
  app: {
    baseURL: '/',
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 300,
        awaitWriteFinish: {
          stabilityThreshold: 500,
          pollInterval: 100
        }
      }
    }
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'https://your-api-server.com',
      recaptchaSitekey: process.env.RECAPTCHA_SITEKEY,
      s3BucketUrl: process.env.NUXT_PUBLIC_S3_BUCKET_URL || "https://aishop.thegolf.com",
      kakaoMapKey: process.env.NUXT_PUBLIC_KAKAO_KEY,
    },
  },
})