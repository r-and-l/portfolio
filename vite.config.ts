import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
  plugins: [
    react()
    ,legacy({
      targets: ['defaults', 'not IE 11'],
    })
    ,tailwindcss()
  ],
})
