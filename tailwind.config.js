/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#dc7000",
        lightOrange: "rgba(226, 122, 12, 0.12)",
        lightGrey: "#f5f5f5",
        textgrey: "#525252"
      },
  },
  screens: {
    xs: "480px",
    ss: "620px",
    sm: "768px",
    md: "1060px",
    lg: "1200px",
    xl: "1700px",
    },
  },
  plugins: [],
}


