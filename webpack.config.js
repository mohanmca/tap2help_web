var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var WriterPlugin = require('write-file-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/index.html',
    filename: 'index.html',
    inject: 'head'
});

function CompilerPlugin(options) {}

CompilerPlugin.prototype.apply = function(compiler) {
    compiler.plugin('done', function() {
        console.log('Compilation completed! ~~ ', Date())
    });
};

module.exports = {
    devtool: 'source-map',
    devServer: {
        outputPath: path.resolve(__dirname + '/dist')
    },
    entry: [
        'es6-promise', 'whatwg-fetch', './js/application.js'
    ],
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.png$/,
            loader: "url-loader?mimetype=image/png"
        }, {
            test: /\.(jpg|gif)$/,
            loader: "url-loader?limit"
        }]
    },
    historyApiFallback: true,
    output: {
        filename: "application_bundle.js",
        path: path.resolve(__dirname + '/dist/js'),
        libraryTarget: 'var',
        library: 'application'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [HTMLWebpackPluginConfig, WriterPlugin, new CompilerPlugin()]
}
