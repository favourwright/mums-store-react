/** @type {import('tailwindcss').Config} */
export default {
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
        layout: '60px',
      },
      fontFamily: {
        vastago: ["vastago"],
      },
      fontSize: {
        clamp: "clamp(2rem, 5vw, 3.75rem)",
      },
    },
  },
  plugins: [],
}

