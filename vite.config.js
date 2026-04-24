import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const githubPagesBase = "/JaySweetSnackeria/";

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === "build" ? githubPagesBase : "/",
  plugins: [react()],
}));
