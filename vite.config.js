import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // REEMPLAZA 'portfolio-react' por el nombre exacto de tu repositorio en GitHub
  base: '/portfolio-react/', 
})