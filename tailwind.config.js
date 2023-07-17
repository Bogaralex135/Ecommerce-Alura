/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', 'src/**/*.{js,jsx}'],
  theme: {
    extend: {},
    backgroundImage: {
      hero: 'url("/hero.jpeg")',
    },
    colors: {
      white: '#fff',
      primary: '#f5f5f5',
      secondary: '#EAF2FD',
      text: '#464646',
      blue: '#2A7AE4',
      gray: '#A2A2A2',
    },
    fontFamily: {
      raleway: ['Raleway', 'sans-serif'],
    },
  },
  plugins: [],
}
