/** @type {import('tailwindcss').Config} */
export default {
  content: [ './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ebc7bc',
        secondary: '#f36437',
        light: '#f2f1ef',
        gray: '#74768f',
      }
    },
  },
  plugins: [],
}

