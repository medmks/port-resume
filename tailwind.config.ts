import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor: "#0e1010",
      },
      fontFamily: {
        outfit: ["Outfit", "serif"],
        outfitsubtext: ["Outfit", "Inter", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
