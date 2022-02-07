
module.exports = {
  content: [
    "./src/**/*.{html,js,tsx,jsx,ts}",
    "./pages/**/*.{html,js,tsx}",
    "./components/**/*.{html,js,tsx,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography")({
      className: "wysiwyg",
    }),
  ],
};
