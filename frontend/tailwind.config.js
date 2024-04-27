
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Inter', 'sans-serif']
      },
      screens: {
        "sm":"320px",
        "md":"768px",
        "lg":"1024px",
        }
    },

   
  },
  plugins: [],
});