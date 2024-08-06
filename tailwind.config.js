/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        B1:"#7D50E1",
        
        
      },
      borderRadius:{
        R1:"20px",
        R2:"14px",
        R3:"10px",
      },
      textColor:{
        H1:"#A3A5AA",
        B1:"#7D50E1"
      },borderColor:{
        H1:"#A3A5AA"
      }
    },
  },
  plugins: [],
}