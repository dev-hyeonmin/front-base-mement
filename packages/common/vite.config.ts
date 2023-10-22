import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

/**
 * @vitejs/plugin-react
 * esbuild와 Babel을 사용하여 작은 패키지 크기와 Babel 변형 파이프라인의 유연성을 통해 빠른 HMR을 달성합니다.
 * 추가 Babel 플러그인이 없으면 빌드 중 esbuild만 사용됩니다.
 */