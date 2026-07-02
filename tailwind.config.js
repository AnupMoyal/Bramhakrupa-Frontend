/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: { light: '#e8d5a3', DEFAULT: '#c9a84c', dark: '#9a7c3c' },
        brand: { dark: '#1c1c1c', mid: '#2a2a2a', light: '#4a4a4a' },
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
