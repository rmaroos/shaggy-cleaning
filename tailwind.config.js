export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ink: '#000000',
        paper: '#FFFFFF',
        brand: '#D9232E',
      },
      fontFamily: {
        display: ['Manrope', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        float: '0 8px 30px rgba(0,0,0,0.08)',
      },
      borderRadius: {
        hero: '20px',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
      maxWidth: {
        site: '1280px',
      },
    },
  },
  plugins: [],
};
