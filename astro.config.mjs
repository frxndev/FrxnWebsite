import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  site: 'https://frxn.pages.dev',
  base: '/',
  optimizeDeps: {},
  prefetch: false,
  experimental: {
    responsiveImages: true,
    svg: true
  },
  integrations: [tailwind(), react()]
})
