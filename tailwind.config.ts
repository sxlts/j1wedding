import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    minHeight: {
      screen: '100svh',
    },
    extend: {
      fontFamily: {
        badscript: ['var(--font-bad)'],
        inter: ['var(--font-inter)'],
      },
      backgroundImage: {
        'frame': 'url(/background.jpg)',
        'paper': 'url(/paper.jpg)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
export default config
