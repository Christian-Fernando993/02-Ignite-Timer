import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      background: {
        // Texto
        white: '#FFF',
        'gray-100': '#E1E1E6',
        'gray-300': '#C4C4CC',
        'gray-400': '#8D8D99',
        'gray-500': '#7C7C8A',
        'gray-600': '#323238',
        'gray-700': '#29292E',
        'gray-800': '#202024',
        'gray-900': '#121214',
        // Cores
        'green-300': '#00B37E',
        'green-500': '#00875F',
        'green-700': '#015F43',
        'red-500': '#AB222E',
        'red-700': '#7A1921',
        'yellow-500': '#FBA94C',
      },
      maxWidth: {
        grid: '74rem',
      },
      fontFamily: {
        'roboto-mono': ['Roboto Mono', 'sans-serif'],
      },
    },
  },
}
export default config
