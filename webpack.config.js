const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    { CleanWebpackPlugin } = require('clean-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    CssMinimizerPlugin = require('css-minimizer-webpack-plugin'),
    TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, options) => {
    const isDev = options.mode == 'development';
    const isProd = options.mode == 'production';

    const optimization = () => {
        if (isDev) return {};

        return {
            minimize: true,
            minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
        };
    };

    return {
        context: path.resolve(__dirname, 'src'),
        entry: './index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.[contenthash].js',
        },
        devtool: 'source-map',
        devServer: {
            host: 'localhost',
            port: 3000,
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    localIdentName:
                                        '[name]__[local]___[hash:base64:5]',
                                },
                            },
                        },
                    ],
                    include: /\.module\.css$/,
                },
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                    exclude: /\.module\.css$/,
                },
                {
                    test: /\.png?/,
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images',
                        name: '[name].[ext]',
                    },
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            alias: {
                '@data': path.resolve(__dirname, 'src/data'),
            },
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html',
                minify: {
                    collapseWhitespace: isProd,
                },
            }),
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: 'style.[contenthash].css',
            }),
        ],
        optimization: optimization(),
    };
};
