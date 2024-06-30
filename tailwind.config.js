/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'white': '#FFFCF9',
        'white-with-opacity': 'rgba(255, 252, 249, .7)',
        'black': '#1F1F1F',
        'primary-brown': '#734D37',
        'light-brown': '#FCF3EB',
        'dark-grey': '#828894',
        'primary-grey': '#DDDDDD',
        'light-grey': '#FAFAFA',
      },
      fontSize: { // Añade esta sección
        'extra-lg': '2rem',
        'extra-xl': '2.5rem',
        'extra-2xl': '3rem',
        'extra-3xl': '4rem',
        'extra-4xl': '5rem',  
      }, // Agrega esta coma
    }, // Agrega esta coma
    fontFamily: {
      'sans': ['Jost', 'Lato', 'Arial', 'sans-serif'],
      'fantasy': ['Dancing Script', 'cursive', 'sans-serif'],
    }
  },
  plugins: [],
}
