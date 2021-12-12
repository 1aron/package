const webpack = require('webpack');
const path = require('path');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const master = require('./master.json');

module.exports = {
    mode: 'development',
    entry: './dev/src/index.ts',
    resolve: {
        extensions: common.resolve.extensions,
        modules: [
            ...common.resolve.modules,
            './dev/node_modules'
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: false,
        watchFiles: [
            './dev/src/**/*',
            '../src/**/*'
        ],
    },
    module: {
        rules: [
            ...common.module.rules,
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    configFile: path.resolve('./tsconfig.json')
                }
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            title: master.name,
            favicon: './dev/src/favicon.png',
            template: './dev/src/index.html'
        }),
        ...common.plugins
    ]
}