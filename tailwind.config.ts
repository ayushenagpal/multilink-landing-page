import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#5179bb",
          "red-dark": "#3d5f98",
          navy: "#0f172a",
          "navy-alt": "#1a1a2e",
          slate: "#475569",
          light: "#f8fafc",
          border: "#e2e8f0"
        }
      },
      borderRadius: {
        xl2: "1rem"
      },
      boxShadow: {
        soft: "0 8px 30px rgba(15,23,42,0.08)"
      }
    }
  },
  plugins: []
};

export default config;
