import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px", // Custom small screen size if needed
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "pink-custom": "#FF719B",
        "green-custom": "#DCFF97",
        "background-custom": "#FEFEFE",
        "red-custom": "#E42926",
        "blue-custom": "#262953",
      },
      borderColor: {
        "red-custom": "#E42926",
      },
      textColor: {
        "red-custom": "#E42926",
      },
    },
  },
  plugins: [],
};
export default config;
