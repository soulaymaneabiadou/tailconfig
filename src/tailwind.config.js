module.exports = {
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [],
  },
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        1.75: "0.4375rem",
        13: "3.25rem",
        15: "3.75rem",
        128: "32rem",
        144: "36rem",
      },
      colors: {
        primary: {
          DEFAULT: "#121212",
        },
        secondary: {
          DEFAULT: "#FFFFFF",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
