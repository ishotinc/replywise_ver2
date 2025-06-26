import { defineConfig } from 'vite'

export default defineConfig({
  root: 'public',
  
  // Enable environment variable replacement
  define: {
    // This will replace process.env.VITE_SUPABASE_URL with the actual value
    'process.env.VITE_SUPABASE_URL': JSON.stringify(process.env.VITE_SUPABASE_URL),
    'process.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(process.env.VITE_SUPABASE_ANON_KEY)
  },
  
  // Development server configuration
  server: {
    port: 3000,
    open: true
  },
  
  // Build configuration
  build: {
    outDir: '../dist',
    assetsDir: 'assets',
    sourcemap: true
  }
}) 