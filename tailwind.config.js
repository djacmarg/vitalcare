/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],

  theme: {
    extend: {},
  },
  plugins: [
    require("tw-elements/dist/plugin"),
    require("@tailwindcss/typography"),
  ],
};
