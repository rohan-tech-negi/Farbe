import tailwindcss from '@tailwindcss/vite'

import { repositoryName, apiEndpoint } from './slicemachine.config.json';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Prismic + Nuxt Minimal Starter',
      htmlAttrs: { lang: 'en' },
      meta: [{ charset: 'utf-8' }
        ,
        {name:"apple-mobile-web-app-title", content:"farbe"}
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ,{rel:"apple-touch-icon", href:"/apple-touch-icon.png", sizes:"180x180"},
        {rel:"icon", type:"image/png" ,href:"/favicon-96x96.png", sizes:"96x96"},
        {rel:"icon", type:"image/svg+xml", href:"/faviconsvg"},
        {rel:"manifest", href:"/site.webmanifest"}
      ],
    }
  },

  css:['~/assests/css/index.css'],

  vite:{
     plugins: [
    tailwindcss(),
  ],
  },

  modules: ['@nuxt/eslint', '@nuxtjs/prismic', '@nuxt/fonts'],

  prismic: {
    endpoint: apiEndpoint || repositoryName,
    preview: '/api/preview',
    clientConfig: {
      routes: [
        {
          type: 'page',
          path: '/:uid',
        },
        {
          type: 'page',
          uid: 'home',
          path: '/',
        },
      ]
    }
  },

  compatibilityDate: '2025-07-16',
})