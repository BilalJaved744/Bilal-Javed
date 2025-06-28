import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 👈 this makes it accessible via local IP
    port: 5173  // or any port you want
  }
})
