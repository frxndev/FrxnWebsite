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
        brand: {
          primary: '#5481FF',
          50: '#eef3ff',
          100: '#dae3ff',
          200: '#bdcfff',
          300: '#90b0ff',
          400: '#5481ff',
          500: '#355cfc',
          600: '#1f3af1',
          700: '#1726de',
          800: '#1921b4',
          900: '#1a238e',
          950: '#151856'
        }
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
