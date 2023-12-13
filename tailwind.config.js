/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pro: ['Crimson Pro', 'serif'],
      },
      colors: {
        'bluesuit': '#26233D',
        'grey': '#eeeff7',
        'treegreen': '#479552',
        'darkgrey': '#6d7978',
        'yellowlight': '#ffc92b',
        'darksuit': '#4c4a54',
      }
    },
  },
  plugins: [],
}

