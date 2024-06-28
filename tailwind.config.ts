import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        customColor: "#0e1010",
      },
      fontFamily: {
        outfit: ["Outfit", "serif"],
        inter: ["Inter", "serif"],
        outfitsubtext: ["Outfit", "Inter", "serif"],
      },
    },
  },
  plugins: [flowbite.plugin()],
} satisfies Config;
