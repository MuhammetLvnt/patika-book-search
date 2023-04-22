/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        search:
          "url('https://upload.wikimedia.org/wikipedia/commons/5/5a/Books_HD_%288314929977%29.jpg')",
      },
    },
  },
  plugins: [],
};
