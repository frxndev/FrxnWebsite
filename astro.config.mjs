import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'

import remarkToc from 'remark-toc'
import remarkCollapse from 'remark-collapse'

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  integrations: [tailwind(), mdx()],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: 'Table of contents'
        }
      ]
    ],
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: true
    },
    extendDefaultPlugins: true
  }
})
