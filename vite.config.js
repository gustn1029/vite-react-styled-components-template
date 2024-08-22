import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/vite-react-styled-components-template/" // 이 부분 본인 레포지토리로 변경
})
