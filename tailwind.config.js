module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neongreen: "#52DEE5",
        text: "#C7D3FF",
        textdark: "#A1ABBF",
        bgblue: "#222E50",
        darkerblue: "#0A192F",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        fira: ["Fira Code", "monospace"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
