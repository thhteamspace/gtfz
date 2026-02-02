import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Base path for assets - ensures proper loading in production
  base: '/',
  
  // Build configuration for production deployment
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    
    // Rollup options for better chunk handling
    rollupOptions: {
      output: {
        // Prevent aggressive code splitting that can cause module loading issues
        manualChunks: undefined,
        
        // Ensure proper asset naming
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
    
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },
  
  // Development server configuration
  server: {
    port: 5173,
    strictPort: false,
    host: true,
  },
  
  // Preview server configuration
  preview: {
    port: 4173,
    strictPort: false,
    host: true,
  },
})
