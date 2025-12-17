/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        aravali: {
          green: '#0C3B2E',
          moss: '#145A44',
          sand: '#C7A57A',
          pink: '#E56B83',
          ink: '#0B1220',
          brown: '#5E3B1F',
          earth: '#4A3424'
        }
      },
      boxShadow: {
        soft: '0 20px 60px rgba(0,0,0,0.25)'
      }
    }
  },
  plugins: []
};
