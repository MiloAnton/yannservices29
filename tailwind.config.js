/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: "#F9F7F0",
          sage: "#284032",
          cta: "#FF8229",
          ink: "#050E1C",
          soft: "#ECEAE3",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px rgba(5, 14, 28, 0.08)",
        glow: "0 14px 40px rgba(255, 130, 41, 0.25)",
      },
    },
  },
  plugins: [],
};
