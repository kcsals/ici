import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0E4C92",
          silver: "#C0C0C0",
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #0E4C92 0%, #C0C0C0 100%)",
      },
    },
  },
  plugins: [typography],
} satisfies Config;
