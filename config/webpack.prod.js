const { resolve } = require('path')
const webpackMerge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { webpackCommon } = require('./webpack.common.js')

const env = 'production'

module.exports = () => (
    webpackMerge(webpackCommon({ env }), {

        devtool: 'nosources-source-map',

        module: {
            loaders: [
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'postcss-loader', 'sass-loader']
                    }),
                    include: [
                        resolve(__dirname, '../src')
                    
                    ]
                }
            ]
        },

        plugins: [
            new ExtractTextPlugin({
                filename: '[name].[contenthash].css'
            })
        ]
    })
)