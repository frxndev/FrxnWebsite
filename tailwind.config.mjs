/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
import prose from '@tailwindcss/typography'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        monserrat: ['Montserrat', 'Inter', 'sans-serif']
      },
      colors: {
        primary: '#5481FF'
      },
      keyframes: {
        'reduce-header': {
          '100%': {
            boxShadow: '0 5px 50px -5px #ffffff1a, 0 0 0 1px #ffffff1a',
            background: '#0000004d',
            paddingBlock: '1rem',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }
        }
      }
    }
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        '.header-animate': {
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          animation: 'reduce-header linear both',
          animationTimeline: 'scroll()',
          animationRange: '0 150px'
        }
      })
    },
    prose,
    animations
  ]
}
