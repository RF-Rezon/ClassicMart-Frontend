/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#0f1c55",
        customBlack: "#010001",
        customGray: "#dbdbd9",
        customGold: "#cca471",
        customDarkBlue: "#020c1d",
        buttonBg: "#353535",
        custonBlackBg: "#000101"
      },
      fontFamily: {
        archivo: ['Archivo', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
plugins: [require("daisyui", "@tailwindcss/line-clamp")],
}
