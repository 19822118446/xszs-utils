import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      include: ['src/**/*.ts'], 
      exclude: ['src/**/*.test.ts', 'src/doc/**'],  // 排除测试文件和文档
      outDir: 'dist',
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: './src/index.ts',  
      name: '@xszs/utils',
      formats: ['es', 'cjs'],
      fileName: format => `index.${format === 'es' ? 'js' : 'cjs'}`,
    },
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      external: ['decimal.js', 'exceljs', 'file-saver'],
      output: {
        globals: {
          'decimal.js': 'Decimal',
          'exceljs': 'ExcelJS',
          'file-saver': 'FileSaver',
        },
      },
    },
  },
})
