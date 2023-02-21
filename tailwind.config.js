
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/index.html"],
  theme: {
   
    extend: {
      screens:{
        "sm":'480px',
      },
      height:{
        "half":"50vh",
        "100":"calc(100%- 52px)"
      },
      width:{
        "sm":'320px',
        "m":"500px",
        "l":"650px"

      },
      fontWeight:{
        "200":"200",
        "500":"500",
        "600":"600",
        "700":"700",
        "800":"800",
      }
    },
  },
  plugins: [],
}
