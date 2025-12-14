import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: 'jsdom',
  },
  server: {
    host: true,                 // sallii kuuntelun kaikilla ifaceilla
    allowedHosts: [
      'localhost',
      'todo-frontend'
    ]
  },
  plugins: [react()],
})
