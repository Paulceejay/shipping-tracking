/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      ms: "700",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
        backgroundImage: {
        'header-bg-img': "url('/images/header-bg.jpg')",
        'footer-bg-img': "url('/images/footer-bg.jpg')",
      },
      colors: {
        primaryColor: "#9B146D",
        primary2: "#A9518B",
        secondaryColor: "#033163",
        headerColor: "#343535",
        iconsBg: "#AABACB",
        paragraph: "#616161",
        productBg: "#32182F",
        white: "#FFFFFF",
        inputBg: "#DDDDDD",
        lightGray: "#033163",
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
      },
    },
  },
  plugins: [],
};
