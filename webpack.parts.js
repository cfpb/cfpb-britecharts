const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const constants = require('./webpack.constants');

exports.babelLoader = () => {
    const plugins = [
        '@babel/plugin-transform-modules-commonjs',
        'add-module-exports',
    ];

    if (process.env.BABEL_ENV === 'test') {
        plugins.push('babel-plugin-istanbul');
    }

    return {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                            configFile: false,
                            presets: [
                                ['@babel/preset-env', {
                                    modules: false,
                                    targets: {
                                        browsers: ['last 2 versions'],
                                    },
                                }],
                            ],
                            plugins,
                        },
                    },
                },
            ],
        },
    };
};

exports.bundleTreeChart = (analyzerPort = 8888) => ({
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerPort,
        }),
    ],
});

exports.sassLoader = () => ({
    module: {
        rules: [
            {
                test:/\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
                exclude: /node_modules/,
            }
        ]
    }
});

exports.noParseD3Vendor = () => ({
    module: {
        noParse: [
            new RegExp(constants.PATHS.vendor + '/d3/d3.js')
        ]
    }
});

exports.externals = () => ({
    externals: {
        d3: 'd3'
    },
});

exports.aliasD3ToVendorPath = () => ({
    resolve: {
        alias: {
            d3: constants.PATHS.vendor + '/d3',
        }
    }
});
