/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',   // Extra small screens
        'sm': '640px',   // Small screens
        'md': '768px',   // Medium screens
        'lg': '1024px',  // Large screens
        'xl': '1280px',  // Extra large screens
        '2xl': '1536px', // 2x extra large screens
        '3xl': '1920px', // Custom large screen size (e.g., full HD)
        '4k': '2560px',  // 4K resolution screens
      },
    },
    fontFamily: {
      "Qwit": ["Qwitcher Grypen", "cursive"]
    }
  },
  plugins: [],
}

