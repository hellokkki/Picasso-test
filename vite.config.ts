import { defineConfig } from 'vite'
import svgr from "vite-plugin-svgr"
import react from '@vitejs/plugin-react'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  createSvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), 'src/assets')],
    symbolId: 'icon-[assets]-[name]'
  })
  ],
  server: {
    host: true,
    port: 5000,
    proxy: {
     '/api' : {
      target: 'http://jsonplaceholder.typicode.com',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
     }
    }
    }
  })
