//vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  // base: '/Project2/axercute_your_voice/',
  plugins: [react(), tailwindcss(), "prettier-plugin-tailwindcss"],
});
