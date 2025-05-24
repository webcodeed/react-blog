import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/blogs': "https://verbose-train-4jg7rxrvwxq3jv5p-3000.app.github.dev/"
    }
  }
})
