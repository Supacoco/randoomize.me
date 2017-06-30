const { resolve } = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const {
    DefinePlugin,
    LoaderOptionsPlugin,
    NoEmitOnErrorsPlugin
} = require('webpack')

module.exports.webpackCommon = ({ env }) => (
    {
        entry: './src/index.jsx',

        output: {
            filename: 'bundle.js',
            path: resolve(__dirname, '../dist')
        },

        module: {
            loaders: [
                {
                    test: /\.(js|jsx)$/,
                    use: 'babel-loader',
                    include: [
                        resolve(__dirname, '../src')
                    ]
                }
            ]
        },

        plugins: [
            new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                openAnalyzer: false,
                reportFilename: '../bundleAnalyzer/report.html'
            }),

            new DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify(env)
                }
            }),

            new HtmlWebpackPlugin({
                title: 'Randoomize.me'
            }),

            new LoaderOptionsPlugin({
                options: {
                    postcss: [
                        autoprefixer({
                            browsers: [
                                'last 3 version',
                                'ie >= 10'
                            ]
                        })
                    ]
                }
            }),

            new NoEmitOnErrorsPlugin()
        ]
    }
)