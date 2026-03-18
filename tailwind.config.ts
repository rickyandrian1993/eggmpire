import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom dark background color (#1d1d1d)
        "dark-bg": "#1d1d1d",
        "dark-bg-secondary": "#2a2a2a",
      },
    },
  },
  plugins: [],
};

export default config;

