/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: "20px",
        center: true,
        screens: {
          lg: "1330px",
        },
        color: {
          primary: "rgb(63, 81, 181)",
          secondary: " rgb(170, 170, 170)",
        },
      },
    },
    plugins: [],
  },
};
