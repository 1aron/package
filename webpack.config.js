
const path = require('path');
const Webpack = require('webpack');
const glob = require('globby');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const src = path.resolve('./src');
const packagePath = path.join(src, 'package.json');
const package = require(packagePath);

module.exports = env => {
    const entryGlob = [
        path.join(src, '**/index.scss')
    ];

    return {
        entry: glob.sync(entryGlob).reduce((entrypoint, eachPath) => {
            const parsePath = path.parse(path.relative(src, eachPath));
            const filename = path.join(parsePath.dir, parsePath.name);
            if (entrypoint[filename]) {
                entrypoint[filename].push(path.resolve(eachPath))
            } else {
                entrypoint[filename] = [path.resolve(eachPath)];
            }
            return entrypoint;
        }, {}),
        mode: 'production',
        optimization: {
            minimize: true
        },
        module: {
            rules: [
                {
                    test: /index\.(sass|scss|css)$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        }
                    ]
                },
                {
                    test: /\.(sass|scss|css)$/,
                    use: [
                        { loader: 'css-loader' },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    config: 'postcss.config.js',
                                },
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sassOptions: {
                                    includePaths: ['./node_modules']
                                }
                            }
                        }]
                }
            ]
        },
        output: {
            clean: true
        },
        devtool: 'source-map',
        plugins: [
            new Webpack.ProgressPlugin(),
            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[name].css'
            }),
            new CopyPlugin({
                patterns: [
                    {
                        from: packagePath,
                        transform(content) {
                            let package = JSON.parse(content.toString());
                            delete package.devDependencies;
                            delete package.publishConfig;
                            delete package.release;
                            delete package.files;
                            delete package.scripts;
                            return Buffer.from(JSON.stringify(package));;
                        },
                    },
                ],
            }),
        ]
    }
}