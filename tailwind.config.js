module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto-slab': ['Roboto Slab', 'serif']
    },
    extend: {
      colors: {
        'background': '#012d5e',
        'font-color': '#ffffff',
        'blue': '#5882E3',
        'light-blue': '#254870',
        'yellow': '#ffc107',
        'red': '#dc3545',
        'white': '#fff',
      },
    },
  },
  plugins: [],
}
