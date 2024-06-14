/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgGeneral: "#141414",
        bgPrimary: "#1C1C1C",
        primaryText: "#DADEE3",
        secondaryText: "#A4A4A4",
        bgHover: "#292929",
      },
    },
  },
  plugins: [],
};
