const fs = require('fs');
const path = require('path');

function javascriptFiles(directory) {
    return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
        const fullPath = path.join(directory, entry.name);

        if (entry.isDirectory()) {
            return javascriptFiles(fullPath);
        }

        if (entry.name.endsWith('.js') && !entry.name.endsWith('.spec.js')) {
            return [fullPath.split(path.sep).join('/')];
        }

        return [];
    });
}

const entry = [
    'src/index.js',
    ...javascriptFiles('src/charts'),
    ...javascriptFiles('src/react'),
];

function bundle(format, outDir) {
    return {
        entry,
        format: [format],
        outDir,
        bundle: false,
        sourcemap: true,
        clean: true,
        splitting: false,
        treeshake: true,
        external: [/^d3($|\/|-)/, 'react'],
        outExtension() {
            return { js: '.js' };
        },
        esbuildOptions(options) {
            options.outbase = 'src';
        },
    };
}

module.exports = [
    bundle('esm', 'dist/esm'),
    bundle('cjs', 'dist/cjs'),
];
