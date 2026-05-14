module.exports = {
  darkMode: 'class',
  content: [
    './resources/views/**/*.blade.php',
    './resources/js/**/*.{js,ts,jsx,tsx}',
    './resources/css/**/*.css',
    './public/images/spotlight/**/*.{html,js}'
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tw-animate-css')],
}
