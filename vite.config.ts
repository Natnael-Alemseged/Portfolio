import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteImagemin from 'vite-plugin-imagemin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImagemin({
      gifsicle: {
        optimizationLevel: 3,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      pngquant: {
        quality: [0.7, 0.9]
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
            active: false
          }
        ]
      },
      webp: {
        quality: 75 // Adjust WebP quality as needed (0-100)
      }
    })
  ]
})
