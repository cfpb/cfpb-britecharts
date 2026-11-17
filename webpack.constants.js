const path = require('path');

exports.CHARTS = {
    line: './src/charts/line.js',
    miniTooltip: './src/charts/mini-tooltip.js',
    row: './src/charts/row.js',
    stackedArea: './src/charts/stacked-area.js',
    tooltip: './src/charts/tooltip.js',
};

exports.DEMOS = {
    'demo-color': './demos/src/demo-color.js',
    'demo-kitchen-sink': './demos/src/demo-kitchen-sink.js',
    'demo-line': './demos/src/demo-line.js',
    'demo-row': './demos/src/demo-row.js',
    'demo-stacked-area': './demos/src/demo-stacked-area.js',
};

exports.PATHS = {
    vendor: path.resolve('./node_modules'),
    bundleIndex: path.resolve('./src/index.js'),
    charts: path.resolve('./src/charts'),
};
