import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
      },
      maxWidth: {
        lg: "1024px",
      },
      width: {
        lg: "1024px",
      },
      boxShadow: {
        project: "0px 0px 10px 10px",
      },
    },
  },
  plugins: [],
} satisfies Config;
