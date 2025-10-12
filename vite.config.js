import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default ({ mode }) => {
  const env = loadEnv(mode, __dirname, '')

  return defineConfig({
    plugins: [react(), tailwindcss()],
    // ✅ base path automatically switches between localhost and GitHub Pages
    base: mode === 'production' ? env.VITE_PUBLIC_URL : '/'
  })
}
