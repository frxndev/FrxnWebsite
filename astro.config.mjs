import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: 'always'
  },
  compressHTML: true,
  site: 'https://frxn.pages.dev',
  base: '/',
  redirects: {
    '/': '/tools',
    '/portfolio': '/tools'
  },
  experimental: {
    responsiveImages: true,
    svg: true
  },
  prefetch: true,
  devToolbar: {
    enabled: false
  },
  vite: {
    plugins: [tailwindcss()]
  }
})
