import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import fs from 'fs';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'exclude-psd-from-public',
      closeBundle() {
        const distDir = resolve('dist');
        const psdFiles = ['stefankudev-bubble-logo.psd', 'bubble_logo.psd'];
        psdFiles.forEach(file => {
          const filePath = resolve(distDir, file);
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
          }
        });
      },
    },
  ],
  server: {
    host: true,
    port: 5173,
  },
});
