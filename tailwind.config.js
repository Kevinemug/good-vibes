/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {


    spacing:{
      '200':'200px',
      '40':'40px',
      '20':'20px',
      '300':'300px'
    },
    
 screens:{

  sm:'480px',
  md:'768px',
  lg:'976px',
  xl:'1440px',
  duo:'540'

  // sm:'640px',
  // md:'768px',
  // lg:'1024px',
  // xl:'1280px',
  // 2xl:'1536px',
  
 },

    extend: {


    },
  },
  plugins: [],
}

