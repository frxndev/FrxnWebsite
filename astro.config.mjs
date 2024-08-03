import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  // redirects: {
  //   '/': '/blog'
  // },
  integrations: [tailwind(), react()]
})
