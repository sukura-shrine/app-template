import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import qiankun from 'vite-plugin-qiankun'
import pkg from './package.json'

const cwd = process.cwd()

const server = {
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  port: pkg.hakushin.port,
  proxy: {},
  host: '0.0.0.0',
}

let base = '/'
if (process.env.NODE_ENV === 'production') {
  // 这里改成你的项目的线上地址，推荐通过环境变量注入
  base = process.env.ENV_PUBLIC_PATH
} else {
  base = `http://localhost:${server.port}/`
}

const reactPlugins = react().filter(item => item.name !== 'vite:react-refresh')

export default defineConfig({
  base,
  resolve: {
    alias: [
      { find: '@', replacement: path.join(cwd, './src') },
    ],
  },
  plugins: [
    reactPlugins,
    qiankun(pkg.name, { useDevMode: true }),
  ],
  optimizeDeps: {
  },
  server,
})
