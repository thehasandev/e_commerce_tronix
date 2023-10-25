/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1597px',
      },
      fontFamily: {
        'pop': ['Poppins'],
        'mon': ['Montserrat'],
        'nunito': ['Nunito Sans'],  
      },
      colors: {
        'primary': '#F46B5B',
        'secondary': '#383838',
      },
    },

  },
  plugins: [],
}

