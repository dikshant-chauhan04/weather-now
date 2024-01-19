import postcssNesting from "postcss-nesting";
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [postcssNesting()],
};
