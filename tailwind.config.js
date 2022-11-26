/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: { c777: "#777", aqmeter: "#0648a4" },
      colors: { aqmeter: "#0648a4" },
    },
  },
  plugins: [],
};
