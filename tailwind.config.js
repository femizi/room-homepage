module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      keyframes: {
        slideleft: {
          '0%, 100%': { transform: 'translateX(-100%)' },
       
        },
        slideright: {
          '0%, 100%': { transform: 'translateX(100%)' },
      }
    },
    animation: {
      slideleft: 'slideleft 0.5s ease-in-out ',
      slideright: 'slideright 0.5s ease-in-out',
    }
  },
  plugins: [],
}
}