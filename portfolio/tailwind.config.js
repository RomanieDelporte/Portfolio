/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'max': '640px'},
        'md': {'max': '768px'},
        'lg': {'max': '1020px'},
        'xl': {'max': '1280px'},
        '2xl': {'max': '1535px'},
      },
      colors: {
        'primary': '#FF6363',
        'secondary': {
          100: '#FAF9F6',
        },
      },
    },
  },
  plugins: [],
}

