import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

import tailwindcssForms from "@tailwindcss/forms";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-plus-jakarta-sans)",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [tailwindcssForms],
};
export default config;
