import { defineConfig } from '@rstest/core';

export default defineConfig({
    globals: true,
    testEnvironment: 'happy-dom',
    setupFiles: ['./test/setup.js'],
    include: ['test/specs/**/*.spec.js'],
    coverage: {
        enabled: true,
        provider: 'istanbul',
        reportsDirectory: './stats/testCoverage',
        reporters: ['text', 'html', 'lcov'],
        include: ['src/charts/**/*.js', 'src/react/**/*.js'],
    },
});
