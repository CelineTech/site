import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'ct-black': '#0E0B0D',
        'ct-rose-dark': '#C06070',
        'ct-rose-mid': '#D4848A',
        'ct-rose-light': '#EDD0D2',
        'ct-off-white': '#FDF5F5',
      },
      fontFamily: {
        serif: ['var(--font-eb-garamond)', 'Georgia', 'serif'],
        sans: ['"Trebuchet MS"', 'Trebuchet', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
