const path =require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('css/[name]-css.css');
const extractSASS = new ExtractTextPlugin('css/[name]-sass.css');


module.exports = {
    entry: "./examples/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/examples/dist"
    },
    // 启用source map
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    module: {
        rules: [{ 
                test: /\.tsx?$/, 
                loader: "awesome-typescript-loader" 
            },
            { 
                test: /\.jsx?$/, 
                loader: "babel-loader", 
                include: [
                    path.resolve(__dirname, 'packages'),
                    path.resolve(__dirname, 'examples')
                ],
                options: {
                    presets: ['@babel/preset-react'],
                    plugins: ['@babel/plugin-proposal-class-properties']
                }
            },
            {                 
                test:/\.css$/,
                use: extractCSS.extract({
                    use: "css-loader",
                    fallback: "style-loader"
                })             
            },
            {
                test:/\.scss$/,
                use: extractSASS.extract({
                    use: [
                        {loader: "css-loader"},
                        {loader: "sass-loader"}
                    ],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name:'img/[name].[ext]', 
                        publicPath:'../'
                    }
                }]
            },
            { 
                enforce: "pre", 
                test: /\.jsx?$/, 
                loader: "source-map-loader" 
            }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "examples/dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({template: './examples/index.html',filename: 'index.html'}), 
        new CopyWebpackPlugin([{from:'./examples/img',to:'./img'}]),
        extractCSS,
        extractSASS,
        new CleanWebpackPlugin(['dist','build'],{verbose:false,exclude:['img']})
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};