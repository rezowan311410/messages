/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      container: {
        padding: "1rem",
        center: true,
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1280px", // Set the width for lg screen size
          xl: "1440px", // Set the width for xl screen size
        },
      },
      colors: {
        bg_primary: "#ffffff",
        bg_secondary: "#F3F4F6",
        nav_iconColor: "#6C737F",
        border_color: "#E5E7EB",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
