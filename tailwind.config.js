/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xxs: '375px',
      smm: '640px',
      mdd: '768px',
      lgg: '1024px'
    },
    extend: {},
  },
  plugins: [],
}
