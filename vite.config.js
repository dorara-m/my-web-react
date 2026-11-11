import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Emotion の css prop を使うため JSX ランタイムを @emotion/react に向ける
  plugins: [react({ jsxImportSource: "@emotion/react" })],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    // CRA 時代と同じ出力先（ホスティング側の設定を変えずに済むように）
    outDir: "build",
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  },
});
