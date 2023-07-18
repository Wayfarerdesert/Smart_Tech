import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@/App': fs.realpathSync(path.resolve(__dirname, 'src/AppUser.jsx')),
//     extensions: ['.js', '.jsx'],
//     },
//   },
// })


// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@/App': path.resolve(__dirname, 'src/AppUser.jsx'),
//     },
//     extensions: ['.js', '.jsx'], // Agrega esta línea
//   },
// })
