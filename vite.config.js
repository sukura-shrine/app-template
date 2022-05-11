import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pkg from './package.json'

const cwd = process.cwd()

const server = {
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  port: pkg.shrine.port,
  proxy: {},
  host: '0.0.0.0',
}

export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: path.join(cwd, './src') },
    ],
  },
  plugins: [react()],
  optimizeDeps: {
  },
  server,
})
