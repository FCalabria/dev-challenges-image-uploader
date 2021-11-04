module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Monserrat', 'Helvetica', 'Arial', 'sans-serif'],
        rounded: ['Poppins, sans-serif']
      },
      fontSize: {
        xxs: ['.65rem', '1rem'],
      },
      keyframes: {
        progress :{
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(calc(20rem - 6rem))' },
        }
      },
      animation: {
        progress: 'progress 2s ease-in-out infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
