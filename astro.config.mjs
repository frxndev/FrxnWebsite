import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: 'always'
  },
  compressHTML: true,
  site: 'https://frxn.pages.dev',
  base: '/',
  optimizeDeps: {
    include: ['react-compiler-runtime', 'react-dom', 'react']
  },
  experimental: {
    responsiveImages: true,
    svg: true
  },
  prefetch: true,
  devToolbar: {
    enabled: false
  },
  integrations: [tailwind(), react()]
})
