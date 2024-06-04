/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        activeNavElement: "#3286f4",
      },
    },
  },
  plugins: [],
};
