/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'bottom-right': '5px 5px 10px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
