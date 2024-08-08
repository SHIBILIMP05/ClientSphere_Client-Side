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
        B2:"#8868EA",
        B3:"#A593F2",
        B4:"#F5F4FE"
        
      },
      borderRadius:{
        R1:"20px",
        R2:"14px",
        R3:"10px",
      },
      textColor:{
        H1:"#A3A5AA",
        B1:"#7D50E1"
      },
      fontSize:{
        TS1:"15px"
      }
      ,borderColor:{
        H1:"#A3A5AA"
      }
    },
  },
  plugins: [],
}