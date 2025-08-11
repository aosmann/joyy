/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        joyy: {
          yellow: '#FFC319',
          red: '#FF4545',
          lightBlue: '#77DDE7',
          mediumBlue: '#2382A1',
          deepBlue: '#02567A',
        }
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
};