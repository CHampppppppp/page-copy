import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic', // 添加这一行  //It's not helping bruh
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
})
