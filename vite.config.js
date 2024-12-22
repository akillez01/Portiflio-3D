import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portiflio-3D/', // Corrija o caminho base para o nome do repositório
  plugins: [react()],
});