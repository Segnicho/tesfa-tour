/** @type {import('tailwindcss').Config} */
export default {
  content: [
"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#222222',
        secondary: '#0EAFAF',
        'primary-text': '#666666',
        'secondary-text': '#717171',
        'tertiary-text': '#565656',
        
      },
      fontFamily: {
        poppins: ["Poppins"],
        montserrat: ["Montserrat"],
        DMSans: ["DM Sans"],
      },
      fontSize: {
        'primaryHeading': '55px',
      }
    },
  },
  plugins: [],
}

