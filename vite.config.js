import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation"

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "finance",
      filename: "remoteEntry.js",
      exposes: {
        "./FinanceApp": "./src/FinanceApp.jsx"
      },
      remotes: {
        host: "http://localhost:5000/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"]
    })
  ],
  server: { port: 5002 },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
