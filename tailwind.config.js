/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {

    
      screens: {
        // lg: { max: "1025px" },
        // // => @media (max-width: 991px) { ... }
        md: { max: "800px" },
        // // => @media (max-width: 767px) { ... }
        sm: { max: "479px" },
        // => @media (max-width: 479px) { ... }
      },


    extend: {
      colors:{
        "primary" :"#B27767",
        "secondary":"#363030",
        "basic":"#ddbd68",
        "normal" :'FCEBE7'
      }
    },
  },
  plugins: [],
}
