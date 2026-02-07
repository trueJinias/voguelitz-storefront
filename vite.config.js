import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',

  build: {
    outDir: 'shopify_theme/assets',
    emptyOutDir: true,
    cssCodeSplit: false, // Force single CSS file
    rollupOptions: {
      output: {
        entryFileNames: 'main.js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
        manualChunks: undefined, // Let Vite handle chunks, but we want to avoid complex splitting if possible
      },
    },
  },
})
