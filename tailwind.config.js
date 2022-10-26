module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./templates/**/*.{html,js}",
  ],
  theme: {
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      screens: {
        sm: "375px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        "dark-blue": "hsl(209, 23%, 22%)",
        "bg-dark-blue": "hsl(207, 26%, 17%)",
        "text-dark-blue": "hsl(200, 15%, 8%)",
        "dark-gray": "hsl(0, 0%, 52%)",
        "bg-light-gray": "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
