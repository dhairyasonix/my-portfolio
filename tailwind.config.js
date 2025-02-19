/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Use "iDroid" (matching @font-face) + a fallback
        iDroid: ["iDroid", "sans-serif"],
      },
      colors: {
        // You can name it whatever you like
        customBlack: '#121212',
        coustomGreen: '#85DB16',
        coustomGreenBg: '#383F2F',
      },
    },
  },
  plugins: [],
};

