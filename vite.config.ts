import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import fs from 'fs';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      webp: {
        quality: 80,
      },
    }),
    {
      name: 'exclude-psd-from-public',
      closeBundle() {
        const distDir = resolve('dist');
        const psdFiles = ['stefankudev-bubble-logo.psd', 'bubble_logo.psd'];
        psdFiles.forEach((file) => {
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
