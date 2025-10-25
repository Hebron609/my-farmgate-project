// tailwind.config.js
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      screens: {
        mobile: '654px', // Custom breakpoint for mobile layout
      },
      fontFamily:{
        instrument: ['Instrument Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
