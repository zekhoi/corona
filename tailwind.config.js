module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        basecolor: "#f7f8fa",
        primary: "#4b87ff",
        secondary: "#5c92ff",
        tertiary: "#2969eb",
        "number-one": "#8282ff",
        "number-two": "#27ea27",
        "number-three": "#fbc02d",
        "red-one": "#ff002b",
      },
      width: {
        100: "28rem",
      },
    },
  },
  plugins: [],
};
