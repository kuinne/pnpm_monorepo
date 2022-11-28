import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
  },
  resolve: {
    '@kuinne/share': resolve(__dirname, 'packages/shared/index.ts'),
    '@kuinne/core': resolve(__dirname, 'packages/core/index.ts'),
  },
});
