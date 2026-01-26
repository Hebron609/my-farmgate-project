// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "654px", // Custom breakpoint for mobile layout
      },
      fontFamily: {
        livvic: ["Livvic", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: {
          black: "#000000",
          white: "#FFFFFF",
        },
        brand: {
          green: "#129C48",
        },
        secondary: {
          "lively-green": "#94C93D",
          "vibrant-green": "#6ABC46",
          "sunny-yellow": "#F2CB00",
        },
        // Keep legacy names for backward compatibility
        "leafy-green": "#129C48",
        "lively-green": "#94C93D",
        "vibrant-green": "#6ABC46",
        "sunny-yellow": "#F2CB00",
      },
      fontSize: {
        'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '700', fontFamily: 'Livvic' }], // ~40pt
        'subheading': ['1.5625rem', { lineHeight: '1.3', fontWeight: '600', fontFamily: 'Livvic' }], // ~25pt
        'body': ['0.875rem', { lineHeight: '1.5', fontWeight: '400', fontFamily: 'Montserrat' }], // 14pt
        'body-lg': ['1.125rem', { lineHeight: '1.5', fontWeight: '400', fontFamily: 'Montserrat' }], // 18pt
      },
    },
  },
  plugins: [],
};
