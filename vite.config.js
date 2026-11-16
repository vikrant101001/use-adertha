import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the site works on GitHub Pages under /use-adertha/.
export default defineConfig({
  plugins: [react()],
  base: './',
})
