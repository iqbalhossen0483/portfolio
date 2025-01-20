module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1c90a6",
        secondary: "#c2e8f3",
        "solid-primary": "#004856",
        light: "#def6fb",
      },
      fontFamily: {
        "baloo-bhai": ["'Baloo Bhai 2'", "cursive"],
      },
      keyframes: {
        "bounce-down": {
          "0%": {
            transform: "translateY(-25%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "none",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        "bounce-down": "bounce-down 1s linear",
      },
    },
  },
  plugins: [],
};
