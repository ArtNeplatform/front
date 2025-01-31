import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  define: {
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      plugins: [
        [
          '@swc/plugin-emotion',
          {
            sourceMap: true,
            autoLabel: 'dev-only',
            labelFormat: '[local]',
          },
        ],
      ],
    }),
    svgr(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@apis': path.resolve(__dirname, './src/apis'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@contexts': path.resolve(__dirname, './src/contexts'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@types': path.resolve(__dirname, './src/types'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@test': path.resolve(__dirname, './src/test'),
    },
  },
});
