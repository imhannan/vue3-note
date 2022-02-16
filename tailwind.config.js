module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#42b883",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
