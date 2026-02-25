/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: "#F5FEE8",
          sage: "#BBC9A8",
          cta: "#D48538",
          ink: "#1F2937",
          soft: "#EEF5DE",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px rgba(31, 41, 55, 0.08)",
        glow: "0 14px 40px rgba(212, 133, 56, 0.25)",
      },
    },
  },
  plugins: [],
};
