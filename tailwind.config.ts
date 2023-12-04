import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      'dreamBlack':'#000B1A',
      'white':'#ffffff',
      'black':'#000000',
      'transparent': 'transparent',
      'blue':'#004BAD',
      'shadowBlue':'#003173',
      'buttonBlue':'#001DB6',
      'grey':'#8F8D8D',
      'boxBorder':'#001A3D',
      'maxGradientFrom':'#024EB2',
      'cardBorder':'#3C5BFF'
        },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
