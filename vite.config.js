import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    port: 5173,
    open: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'admin/login.html'),
        galeria: resolve(__dirname, 'admin/galeria.html'),
        servicios: resolve(__dirname, 'admin/servicios.html'),
        tarifas: resolve(__dirname, 'admin/tarifas.html')
      }
    }
  }
});
