import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default ({ mode }) => {
  // load .env variables based on the current mode (development/production)
  const env = loadEnv(mode, __dirname, '')

  return defineConfig({
    plugins: [react(), tailwindcss()],
    base: env.VITE_PUBLIC_URL || '/Profile', // ✅ use env variable or fallback
  })
}
