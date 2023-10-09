
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "xl-home": "url('/desktop/bg-desktop.jpg')",
         "xxs-bg": "url('/mobile/bg1.png')"
      },
    },
    screens: {
      'sm': '640px', // Define your small screen breakpoint here
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
  variants: {
    extend: {},
  },
  // Create a custom class for responsive background images
  corePlugins: {
    backgroundImage: false, // Disable the default backgroundImage plugin
  },
  // Define a custom class for responsive background images
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {};
      newUtilities[".bg-responsive"] = {
        '@screen sm': {
          backgroundImage: 'url("/tablet/bg-tablet.jpg")', // Use xxl-bg for small screens
        },
        backgroundImage: 'url("/desktop/bg-desktop.jpg")', // Use xl-home for other screens
      };
      addUtilities(newUtilities, ['responsive', 'hover']); // Enable responsive and hover variants
    },
  ],
};
