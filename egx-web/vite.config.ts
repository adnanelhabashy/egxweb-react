import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          // Enable decorators with legacy support
          ["@babel/plugin-proposal-decorators", { legacy: true }],
          // Enable class properties with loose mode
          ["@babel/plugin-proposal-class-properties", { loose: true }],
        ],
      },
    }),
    tailwindcss(),
  ],
});
