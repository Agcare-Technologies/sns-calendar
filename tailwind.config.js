/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        "sm-dec": "url('mobile/Group 412-dec.jpg')",
        "xl-dec": "url('desktop/Group 387.png')",
        "xl-home": "url('/desktop/bg-desktop.jpg')",
        "xs-home": "url('/mobile/background.png')",
        "xs-logo": "url('/mobile/safex_white.png')",
        "xxs-bg": "url('/mobile/bg1.png')"
      }
    },
  },
  plugins: [],
}

