import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#071A3D',
        royal: '#0B3B8F',
        sky: '#14B8FF',
        ice: '#EFF8FF',
        gold: '#FFC857'
      },
      boxShadow: {
        glow: '0 24px 80px rgba(20,184,255,.25)'
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at 1px 1px, rgba(20,184,255,.18) 1px, transparent 0)'
      }
    }
  },
  plugins: []
};

export default config;
