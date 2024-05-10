import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// clase -> .card, .form-control
// accesibilidad -> placeholder, aria-label, ...

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom',
  },
})
