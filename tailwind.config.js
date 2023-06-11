/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./projects/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer"
  ],
}

