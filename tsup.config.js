// tsup.config.ts
import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'], // The entry file(s) for your library
    format: ['esm', 'cjs'], // Output formats: ES Module and CommonJS
    dts: true, // Generate TypeScript declaration files
    clean: true, // Clean the dist directory before building
    sourcemap: true, // Generate sourcemaps for debugging
    splitting: false, // Don't split the code into chunks
});