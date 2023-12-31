const { withAnimations } = require('animated-tailwindcss') // eslint-disable-line
const defaultTheme = require('tailwindcss/defaultTheme') // eslint-disable-line

/** @type {import('tailwindcss').Config} */
module.exports = withAnimations({
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      sans: {
        fontFamily: ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
})
