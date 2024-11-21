import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  prefix: '',
  theme: {
    screens: {
      xxs: '240px',
      xs: '384px',
      sm: '512px',
      md: '672px',
      lg: '768px',
      xlg: '1024px',
      xxl: '1440px',
      xxxl: '1920px',
    },
    extend: {
      colors: {
        surface1: 'var(--surface1)',
        surface2: 'var(--surface2)',
        surface3: 'var(--surface3)',
        primary: 'var(--swatch6)',
        bar: 'var(--swatch6)',
        text1: 'var(--text1)',
        text2: 'var(--text2)',
        link: 'var(--link)',
        border: 'var(--swatch3)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontSize: {
        'fluid-00': 'clamp(.50rem, 2vw, 1rem)',
        'fluid-0': 'clamp(.75rem, 2vw, 1rem)',
        'fluid-base': 'clamp(1.125rem, 3vw, 1.5rem)',
        'fluid-1': 'clamp(1rem, 4vw, 1.5rem)',
        'fluid-2': 'clamp(1.5rem, 6vw, 2.5rem)',
        'fluid-3': 'clamp(2rem, 9vw, 3.5rem)',
        'fluid-4': 'clamp(2rem, 4vw, 3rem)',
        'fluid-5': 'clamp(4rem, 5vw, 5rem)',
        'fluid-6': 'clamp(5rem, 7vw, 7.5rem)',
        'fluid-7': 'clamp(7.5rem, 10vw, 10rem)',
        'fluid-8': 'clamp(10rem, 20vw, 15rem)',
        'fluid-9': 'clamp(15rem, 30vw, 20rem)',
        'fluid-10': ' clamp(20rem, 40vw, 30rem)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
    require('tailwindcss-animate'), // Keep this, no need to require it again
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.holder': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '0.5rem',
          paddingRight: '0.5rem',
          border: '1px solid var(--primary)', // Border color using hsl()
        },
        '.text-shadow': {
          'text-shadow': '0 0 10px var(--primary), 0 0 25px var(--primary-foreground)',
        },
        '.text-shadow-primary-accent': {
          'text-shadow': '0 0 10px hsl(var(--primary)), 0 0 25px hsl(var(--accent))',
        },
        '.text-shadow-muted': {
          'text-shadow': '0 0 10px hsl(var(--muted-foreground)), 0 0 25px hsl(var(--muted))',
        },
        '.section': {
          marginTop: '5rem',
        },

        '.textShadow': {
          primary_accent: '0 0 20px hsl(var(--primary)), 0 0 35px hsl(var(--primary))',
          muted: '0 0 20px hsl(var(--muted-foreground)), 0 0 35px hsl(var(--muted))',
        },
      }
      addUtilities(newUtilities)
    }),
  ],
} satisfies Config
