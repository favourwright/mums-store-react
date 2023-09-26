/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FDF38C', // maize
        'secondary': '#242529', // raisin black
        'complementary': '#C0C0C0', // silver
      },
      padding: {
        'layout-y': '60px',
        'layout-mobile-y': '40px',
        'layout-x': '40px',
        'layout-mobile-x': '20px',
      },
      fontFamily: {
        vastago: ["vastago"],
      },
      fontSize: {
        clamp: "clamp(1.8rem, 5vw, 3.75rem)",
      },
    },
  },
  plugins: [],
}

