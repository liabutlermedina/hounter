module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.html', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkBlue: '#1b1c57',
        lightBlue: '#82bbff',
        darkLime: '#b9ff82',
        lightLime: '#c8ff82',
        darkOrange: '#ff9882',
        lightYellow: '#fffa82',
        darkGreen: '#047857',
        primary: '#10b981',
        glue: '#3c4563',
        lightDarkBlue: '#1b1c57',
      },
      fontFamily: {
        Lexend: ['Lexend', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
