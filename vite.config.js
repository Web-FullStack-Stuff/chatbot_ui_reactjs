import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].build.js`,
        chunkFileNames: `assets/[name].build.js`,
        assetFileNames: `assets/[name].build.[ext]`
      }
    }
  },
  server: {
    port: 3000
  }
})
