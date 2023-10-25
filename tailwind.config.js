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
        'gray': '#A7A7A7',
      },
      fontSize: {
        'small': '18px',
        'text56': '56px',
       
      },
      fontSize: {
        'w154': '154px',
        'w512': '512px',
        'w376': '376px',
  
       
      }
    },

  },
  plugins: [],
}

