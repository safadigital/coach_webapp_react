import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // exclude: ["@ffmpeg/ffmpeg", "@ffmpeg/util"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  server: {
    proxy: {
       '/api': {
           target: 'https://content.the.coach/api', 
           changeOrigin: true,
           rewrite: (path) => path.replace(/^\/api/, ''),
           
           configure: (proxy) => {
              proxy.on('error', (err, _req, _res) => {
               console.log('error', err);
              });
              proxy.on('proxyReq', (req: any, _res) => {
               console.log('Request sent to target:', req.method, req.url);
              });
              proxy.on('proxyRes', (proxyRes, req, _res) => {
               console.log('Response received from target:', proxyRes.statusCode, req.url);
              });
        },
    }
  }
    // headers: {
    //   "Cross-Origin-Opener-Policy": "same-origin",
    //   "Cross-Origin-Embedder-Policy": "require-corp",
    // },
  },
});
