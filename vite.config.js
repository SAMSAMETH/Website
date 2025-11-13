import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  server: {
    allowedHosts: [
      "unslanted-fay-introductory.ngrok-free.dev"
    ],
    host: true,
    port: 5173
  }
})
