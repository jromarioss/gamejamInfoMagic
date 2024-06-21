/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-top-yellow-white': 'linear-gradient(180deg, rgba(145,145,140,1) 0%, rgba(189,171,34,1) 46%, rgba(142,153,0,1) 100%)',
        'gradient-to-top-pink-white': 'linear-gradient(180deg, rgba(145,145,140,1) 0%, rgba(195,67,223,1) 46%, rgba(170,0,199,1) 100%)',
        'gradient-to-top-purple-white': 'linear-gradient(180deg, rgba(145,145,140,1) 0%, rgba(121,60,228,1) 46%, rgba(107,0,247,1) 100%)',
        'gradient-to-top-blue-white': 'linear-gradient(180deg, rgba(145,145,140,1) 0%, rgba(64,85,201,1) 46%, rgba(0,34,247,1) 100%)',
        'gradient-to-top-amber-white': 'linear-gradient(180deg, rgba(145,145,140,1) 0%, rgba(244,132,34,1) 46%, rgba(247,99,0,1) 100%)',
      },
    },
  },
  plugins: [],
}