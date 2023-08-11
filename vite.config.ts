import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    build: {
      target: 'esnext'
    },
    plugins: [
      react({ tsDecorators: true }),
    ],
    server: {
      port: parseInt(process.env.VITE_APP_PORT),
      strictPort: true,
    },
  });
};