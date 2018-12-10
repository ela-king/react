const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = {
    DIST : path.resolve(__dirname,'dist'),
    SRC : path.resolve(__dirname,'src')
}

module.exports = {
    mode:process.env.NODE_ENV === "production"? "production":"development",
    entry:[ 'webpack-dev-server/client?http://localhost:3200',
            'webpack/hot/only-dev-server',
            path.join(paths.SRC,"index.js")],
    output:{
        path: paths.DIST,
        filename:"app.bundle.js",
        publicPath:'/'
    },
    performance:{
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.join(paths.SRC, 'index.html')
        }),
        new ExtractTextPlugin('style.bundle.css'),
        new webpack.ProvidePlugin({
            '$': "jquery",
            'jQuery': "jquery",
            'window.jQuery': "jquery",
            'window.$': 'jquery'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude:/node_modules/,
                use:['babel-loader']
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css-loader','style-loader')
            },
            {
                test:/\.(png|jpg|jpeg|ico|gif)$/,
                use:['file-loader']
            },
            {
                test:/\.(eot|com|json|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test:/\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    devServer:{
        headers:{
            'Access-Control-Allow-Origin':'*'
        },
        historyApiFallback:true,
        hot:true,
        contentBase: path.resolve(__dirname,'src'),
        publicPath:'/'
    }
}