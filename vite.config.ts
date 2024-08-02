import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5174,
    cors: true,
    proxy: {
      "/api": {
        // target: "http://192.168.100.135:8000",
        target: "http://216.250.13.199:8000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
