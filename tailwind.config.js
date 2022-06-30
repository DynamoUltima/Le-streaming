module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        blue:'#15215b',
        deepBlue:'#0057a2'
  
      },

       // fontFamily:{
    //   sans:['Inter','sans-serif']
    // }

    },
   
  },
  plugins: [
    require('tailwind-scrollbar-hide') 
  ],
}
