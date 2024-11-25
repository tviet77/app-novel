/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  darkMode: 'class', 

  theme: {
    extend: {
      colors: {
        primary: "#FF6B6B",   // Màu chính cho các thành phần sáng
        secondary: "#4ECDC4", // Màu phụ
      },
    },
  },
  
  plugins: [],
}
