module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    colors: {
      background: "#2C3A47",
      primary: "#FFFFFF",
      secondary: "#9E9E9E",
      active: "#EAB543",
      light: "#121212",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
