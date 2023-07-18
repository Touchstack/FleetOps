/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Thin: ["AnekDevanagari-Thin", "sans-serif"],
        ExtraLight: ["AnekDevanagari-ExtraLight", "sans-serif"],
        Light: ["AnekDevanagari-Light", "sans-serif"],
        Bold: ["AnekDevanagari-Bold", "sans-serif"],
        Regular: ["AnekDevanagari-Regular", "sans-serif"],
        SemiBold: ["AnekDevanagari-SemiBold", "sans-serif"],
        ExtraBold: ["AnekDevanagari-ExtraBold", "sans-serif"],
        Medium: ["AnekDevanagari-Medium", "sans-serif"],
      },
      colors: {
        fleetBlue: "#23A6BF",
        fleetLightBlue: "#30aec7",
      },
    },
  },
  plugins: [],
};

