import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
// Node built-ins in ESM:

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
