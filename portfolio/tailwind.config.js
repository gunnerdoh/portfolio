/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'original-stone': '#fdfcf6',
        'brand': {
          100: '#E6F6FF',
          500: '#3B82F6',
          900: '#1E3A8A',
        },
        'linkedin-blue': '#0077B5'
      },
      fontFamily: {
        'primary': ['Rubik', 'serif'],
        'secondary': ['Raleway', 'sans-serif']
      },
    },
  },
  plugins: [],
}
