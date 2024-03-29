/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./index.html",
  "./src/*.{js,ts,jsx,tsx}",
  "./components/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./components/**/**/*.{js,ts,jsx,tsx}",
  "./pages/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./pages/**/**/*.{js,ts,jsx,tsx}",],

  theme: {
    extend: {
      backgroundImage: {
        'home-hero': "linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url('/home-hero.png')",
        'about-hero': "url('/about-hero.png')"
      },
      backgroundColor: {
        'bg-orange-250': "rgb(247, 191, 148 / var(--tw-bg-opacity)), --tw-bg-opacity: 1",
      }
    },
  },
  plugins: [],
}
