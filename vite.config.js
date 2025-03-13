import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      keyframes: {
        "color-change": {
          "0%, 100%": { color: "#ff0000" },
          "25%": { color: "#00ff00" },
          "50%": { color: "#0000ff" },
          "75%": { color: "#ff00ff" },
        },
      },
      animation: {
        "color-change": "color-change 5s infinite",
      },
    },
  },
  plugins: [tailwindcss(), react()],
});
