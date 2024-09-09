// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,html}", // Adjust the path to match your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Pacifico"', "cursive"],
      },
    },
  },
  plugins: [],
};
