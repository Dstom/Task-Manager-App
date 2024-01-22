import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
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
      colors: {
        primary:
        {
          dark: '#181c1f',
          light: '#fafafc'
        },
        secondary: {
          dark: '#292f33',
          light: '#eaeaed'
        },
        subtle_green: {
          light: '#baf3db',
          dark: '#164b35'
        },
        green: {
          light: '#4bce97',
          dark: '#206f4e'
        },
        bold_green: {
          light: '#1f845a',
          dark: '#4bce97'
        },
        subtle_blue: {
          light: '#cce0ff',
          dark: '#09316d'
        },
        blue: {
          light: '#579aff',
          dark: '#0052cc'
        },
        bold_blue: {
          light: '#0c62e4',
          dark: '#579aff'
        },
        subtle_yellow: {
          light: '#f8e6a0',
          dark: '#534304'
        },
        yellow: {
          light: '#f5d247',
          dark: '#7e6501'
        },
        bold_yellow: {
          light: '#947600',
          dark: '#e2b603'
        },
        subtle_sky: {
          light: '#c6edfb',
          dark: '#164455'
        },
        sky: {
          light: '#6cc1e0',
          dark: '#206983'
        },
        bold_sky: {
          light: '#227b9b',
          dark: '#6cc1e0'
        },
        subtle_orange: {
          light: '#fedec8',
          dark: '#702d00'
        },
        orange: {
          light: '#fea062',
          dark: '#a34100'
        },
        bold_orange: {
          light: '#c24e00',
          dark: '#fea062'
        },
        subtle_lime: {
          light: '#d3f1a7',
          dark: '#37471f'
        },
        lime: {
          light: '#94c748',
          dark: '#4c6b1f'
        },
        bold_lime: {
          light: '#5b7f24',
          dark: '#94c748'
        },
        subtle_red: {
          light: '#ffd4d1',
          dark: '#5b1e1a'
        },
        red: {
          light: '#f87268',
          dark: '#ae2d24'
        },
        bold_red: {
          light: '#c9372c',
          dark: '#f87268'
        },
        subtle_pink: {
          light: '#fad1ea',
          dark: '#502540'
        },
        pink: {
          light: '#e773bb',
          dark: '#943d73'
        },
        bold_pink: {
          light: '#ae4786',
          dark: '#e773bb'
        },
        subtle_purple: {
          light: '#dfd8fd',
          dark: '#362c63'
        },
        purple: {
          light: '#a18fef',
          dark: '#5f4db3'
        },
        bold_purple: {
          light: '#705dc6',
          dark: '#a18fef'
        },
        subtle_black: {
          light: '#dcdfe4',
          dark: '#454c59'
        },
        black: {
          light: '#8690a2',
          dark: '#596273'
        },
        bold_black: {
          light: '#606e85',
          dark: '#8a97ad'
        },
      },
    },
  },
  plugins: [],
}
export default config
