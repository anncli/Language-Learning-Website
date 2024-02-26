/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'signup': "url('/src/assets/signup.png')",
      }
    },
    colors: {
      'blue':'#1183D0',
      'dark-green':'#30503B',
      'brown':'#994043',
      'light-green':'#DBDFAC',
      'beige':'#F4EBD9',
    }
  },
  plugins: [],
}

