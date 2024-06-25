import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://www.desenvolvimento.mbrplay.com.br/game/JAM/app/",
  plugins: [react()],
})