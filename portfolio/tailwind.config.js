/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
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
        'averia': ['"Averia Serif Libre"', 'serif'],
        'raleway': ["Raleway", "sans-serif"]
      },

    },
  },
  plugins: [],
}


