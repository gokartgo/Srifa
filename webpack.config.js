const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist'),
        publicPath: '',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react',
                            {
                                plugins: [
                                    '@babel/plugin-proposal-class-properties', 'transform-es2015-arrow-functions'
                                ]
                            }],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[name]__[local]__[hash:base64:5]'
                        },
                    },
                    { loader: 'sass-loader' },
                ],
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[name]__[local]__[hash:base64:5]'
                        },
                    }, 'sass-loader',],
                })
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                    {
                        loader: "react-svg-loader",
                    }
                ]
            },
            {
                test: /\.png$/,
                exclude: /(node_modules)/,
                use: [
                    { loader: 'file-loader' },
                ],
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        new ExtractTextPlugin('styles.css', {
            allChunks: true
        }),
    ],
}