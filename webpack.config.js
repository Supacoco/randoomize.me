const { resolve } = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { 
    LoaderOptionsPlugin,
    NoEmitOnErrorsPlugin 
} = require('webpack');

module.exports = {
    entry: './src/index.js',
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
                test: /\.js$/,
                use: 'babel-loader',
                include: resolve(__dirname, 'src')
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                // Inline base64 URLs for <=8k images, direct URLs for the rest
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'url-loader',
                query: {
                    limit: 8192,
                    name: 'assets/img/[name].[ext]?[hash]'
                }
            },
            {
                // Inline base64 URLs for <=8k fonts, direct URLs for the rest
                test: /\.(woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                query: {
                    limit: 8192,
                    name: 'assets/fonts/[name].[ext]'
                }
            },
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
        })
    ]
};