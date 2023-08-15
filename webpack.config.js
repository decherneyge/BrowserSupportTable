const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require("webpack");
const path = require('path');


var extractCss = new ExtractTextPlugin({
    filename: "[name].css"
});

module.exports = {

    devtool: "#inline-source-map",
    entry: './src/app.module.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].js',
        devtoolModuleFilenameTemplate: '/[resource-path]'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: extractCss.extract({
                    use: [{
                        loader: "css-loader", options: {sourceMap: true}
                    },
                        {loader: 'postcss-loader', options: {sourceMap: true}},
                        ],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(jpe?g|png|svg)$/,
                exclude: [/fonts/],
                loader: 'url-loader',
                options: {},
            },
            {test: /\.html$/, use: ["raw-loader"]},
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: module => module.context && module.context.indexOf('node_modules') !== -1
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest' //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
        }),
        extractCss
    ],


};