import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr"; // ← NEW: enables ?react and clean imports
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-react-compiler",
            {
              displayName: true,
              fileName: false,
            },
          ],
        ],
      },
    }),
    svgr(), // ← This single line makes all SVG imports work perfectly
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
