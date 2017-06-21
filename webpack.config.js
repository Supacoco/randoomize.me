const { resolve } = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const {
    LoaderOptionsPlugin,
    NoEmitOnErrorsPlugin,
    DefinePlugin
} = require('webpack');

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist')
    },

    devServer: {},

    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
                include: [
                    resolve(__dirname, 'src/styles')
                ]
            },
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                include: resolve(__dirname, 'src')
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin(),

        new NoEmitOnErrorsPlugin(),

        new LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer({
                        browsers: [
                            'last 3 version',
                            'ie >= 10',
                        ],
                    }),
                ]
            }
        }),

        new DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),

        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename: '../bundleAnalyzer/report.html'
        }),

    ]
};