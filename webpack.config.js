const HtmlWebpackPlugin = require("html-webpack-plugin")
    , vueConf = require("./config/vue-loader.config")
    , path = require("path")

module.exports = {
    output: {
        path: path.resolve(__dirname, "./dist")
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: vueConf
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]?[hash]"
                }
            }
        ]
    },
    resolve: {
        alias: {
            _components: path.resolve(__dirname, "src/components"),
            _img: path.resolve(__dirname, "src/assets/images"),
            _scss: path.resolve(__dirname, "src/assets/styles")
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
}