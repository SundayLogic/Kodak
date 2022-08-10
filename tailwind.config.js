/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
        colors: {
        // Dark text on Light background
        "kodakPurple-0": "#f5f9ff",
        "kodakPurple-0.5": "#deeaff",
        "kodakPurple-1": "#c6d7fe",
        "kodakPurple-1.5": "#b0c3fd",
        "kodakpurple-2": "#99abfd",
        // 3:1 Dark text on Light background
        "kodakPurple-3": "#717bfb",
        // 4:5:1 Light text on Dark background
        "kodakPurple-4": "#5350f7",
        "kodakPurple-5": "#4735f2",
        // 7:1 Light text on Dark background
        "kodakPurple-6": "#3f21e9",
        "kodakPurple-7": "#3812d7",
        "kodakPurple-8": "#2c07ad",
        "kodakPurple-9": "#1b026b",
        "kodakPurple-10": "#0d0033",
      },
      fontFamily: {
        roboto: ["Roboto", "normal"],
      },
      fontSize: {
        "subtitle": "1rem",
        "paragraph": "1.618rem",
        "h3": "2.618rem",
        "h2": "4.236rem",
        "h1": "6.854rem",
        "h0": "6.854rem",
        "shape": "17.942rem",
      }
    },
  },
  plugins: [],
}
