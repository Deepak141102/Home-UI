/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // Linear gradient
        'gradient-to-r': 'linear-gradient(to left, #6c1fab, #4853ec)',
      },
      width: {
        'custom': '500px',  // Example custom width
      },
      scrollbar: {
        width: '4px',  // Custom scrollbar width
        height: '4px', // Custom scrollbar height
        borderRadius: '4px', // Custom scrollbar border-radius
      },
    },
  },
  plugins: [
        require('tailwind-scrollbar'),

  ],
}