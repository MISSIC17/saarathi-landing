/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme:{
    colors:{
      primary:'#003892',
      sec:'#DC143C',
      tert:'#64ab47',
      white:'#ffffff',
      black:'#000000',
      fBlack:'#000000b3',
      fWhite:'#ffffffcc'
    }
  },
  plugins: [],
}
