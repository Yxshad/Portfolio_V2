import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/Yxshad/Portfolio_V2/',
  plugins: [react()],
})