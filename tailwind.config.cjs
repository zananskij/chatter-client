/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.jsx"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "login-bg": "url('/images/login-bg.jpg')",
      }),
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
