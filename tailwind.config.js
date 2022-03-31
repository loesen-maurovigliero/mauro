module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#FAFAFA',
          100: '#F2F2F2',
          200: '#E7E7E7',
          300: '#D3D3D3',
          400: '#AAAAAA',
          500: '#7C7C7C',
          600: '#606060',
          700: '#494949',
          800: '#353535',
          850: '#222222',
          900: '#111111',
        },
      },
    },
  },
};
