/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-warm': '#F1EEEA', // Use any hex code
        'brand': {
          100: '#E6F6FF',
          500: '#3B82F6',
          900: '#1E3A8A',
        }
      },
      fontFamily: {
        'averia': ['"Averia Serif Libre"', 'serif']
      }

    },
  },
  plugins: [],
}

