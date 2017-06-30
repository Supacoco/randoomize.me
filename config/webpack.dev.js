const webpackMerge = require('webpack-merge')
const { webpackCommon } = require('./webpack.common.js')

const env = 'development'

module.exports = () => (
    webpackMerge(webpackCommon({ env }), {

        devtool: 'source-map',

        module: {
            loaders: [
                {
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
                    include: [
                        resolve(__dirname, '../src/styles')
                    ]
                }
            ]
        },

    })
)