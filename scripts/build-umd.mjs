import * as esbuild from 'esbuild';

const charts = {
    line: 'src/charts/line.js',
    miniTooltip: 'src/charts/mini-tooltip.js',
    row: 'src/charts/row.js',
    stackedArea: 'src/charts/stacked-area.js',
    tooltip: 'src/charts/tooltip.js',
};

function assignExport(globalName, property) {
    return {
        js: [
            'var britecharts = globalThis.britecharts || (globalThis.britecharts = {});',
        ].join('\n'),
        footer: [
            `var __export = (${globalName} && ${globalName}.default) || ${globalName};`,
            `britecharts.${property} = __export;`,
            'if (typeof module === "object" && module.exports) {',
            '    module.exports = __export;',
            '    module.exports.default = __export;',
            '} else if (typeof define === "function" && define.amd) {',
            '    define([], function() { return __export; });',
            '}',
        ].join('\n'),
    };
}

function commonJsFooter(exportExpression) {
    return [
        `var __export = ${exportExpression};`,
        'if (typeof module === "object" && module.exports) {',
        '    module.exports = __export;',
        '    module.exports.default = __export;',
        '} else if (typeof define === "function" && define.amd) {',
        '    define([], function() { return __export; });',
        '}',
    ].join('\n');
}

for (const [name, entry] of Object.entries(charts)) {
    const globalName = `britecharts_${name}`;
    const wrapper = assignExport(globalName, name);

    await esbuild.build({
        entryPoints: [entry],
        outfile: `dist/umd/${name}.min.js`,
        bundle: true,
        minify: true,
        format: 'iife',
        globalName,
        sourcemap: true,
        banner: { js: wrapper.js },
        footer: { js: wrapper.footer },
    });
}

await esbuild.build({
    entryPoints: ['src/index.js'],
    outfile: 'dist/bundled/britecharts.min.js',
    bundle: true,
    minify: true,
    format: 'iife',
    globalName: 'britecharts',
    sourcemap: true,
    footer: { js: commonJsFooter('britecharts') },
});

const hookName = 'britecharts_useBritechart';

await esbuild.build({
    entryPoints: ['src/react/use-britechart.js'],
    outfile: 'dist/umd/useBritechart.min.js',
    bundle: true,
    minify: true,
    format: 'iife',
    globalName: hookName,
    sourcemap: true,
    external: ['react', 'd3'],
    banner: {
        js: 'var britecharts = globalThis.britecharts || (globalThis.britecharts = {});',
    },
    footer: {
        js: [
            `var __export = (${hookName} && ${hookName}.useBritechart) || ${hookName};`,
            'britecharts.useBritechart = __export;',
            'if (typeof module === "object" && module.exports) {',
            '    module.exports = __export;',
            '    module.exports.default = __export;',
            '} else if (typeof define === "function" && define.amd) {',
            '    define([], function() { return __export; });',
            '}',
        ].join('\n'),
    },
});
