import { defineConfig } from "vite";
const viteConfig = defineConfig({
  server: {
    host: "localhost",
    port: 1029,
    cors: true,
  },
});
export default viteConfig;
