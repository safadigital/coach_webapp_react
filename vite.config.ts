import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    },
  },
  server: {
    proxy: {
        '/api': {
          target: 'https://content.the.coach',
          changeOrigin: true,
          secure: true,      
          ws: true,
          configure: (proxy, _options) => {
            proxy.on('error', (err, _req, _res) => {
              console.log('proxy error', err);
            });
            proxy.on('proxyReq', (proxyReq, req, _res) => {
              console.log('Sending Request to the Target:', req.method, req.url);
            });
            proxy.on('proxyRes', (proxyRes, req, _res) => {
              console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
            });
          },
        }
      }
  }
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from "path";
// // import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
// // import basicSsl from '@vitejs/plugin-basic-ssl';

// // https://vitejs.dev/config/
// export default defineConfig({
//    plugins: [react()],
//   optimizeDeps: {
//     // exclude: ["@ffmpeg/ffmpeg", "@ffmpeg/util"],
//   },
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src")
//     }
//   },
//   server: {
//     proxy: {

//         '/api': {
//         target: 'https://content.the.coach',
//         changeOrigin: true,
//          rewrite: (path) => path.replace(/^\/api/, ''),
//       },

// //  "/api": "https://content.the.coach",

// // "https://content.the.coach": "https://content.the.coach",
//   //      '/api': {
//   //          target: 'https://content.the.coach', 
//   //          changeOrigin: true,
//   //          rewrite: (path) => path.replace(/^\/api/, ''),
           
//   //       //    configure: (proxy) => {
//   //       //       proxy.on('error', (err, _req, _res) => {
//   //       //        console.log('error', err);
//   //       //       });
//   //       //       proxy.on('proxyReq', (req: any, _res) => {
//   //       //        console.log('Request sent to target:', req.method, req.url);
//   //       //       });
//   //       //       proxy.on('proxyRes', (proxyRes, req, _res) => {
//   //       //        console.log('Response received from target:', proxyRes.statusCode, req.url);
//   //       //       });
//   //       // },
//   //   }
//   // },
  
//   // build: {
//   //   rollupOptions: {
//   //     output: {
//   //       entryFileNames: 'main-bundle.js',
//   //       assetFileNames: 'assets/[name][extname]',
//   //     },
//   //   },
//    },
//     headers: {
//      'Access-Control-Allow-Origin': '*',
//        "Cross-Origin-Embedder-Policy": "require-corp",
//     },
//   },
// });
