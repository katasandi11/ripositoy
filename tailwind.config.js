/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
    },
    extend: {
      colors: {
        "blue-datatech": "#008FD7",
        "gray-datatech": "#AEB6BB",
      },
    },
  },

  plugins: ["prettier-plugin-tailwindcss"],
};
