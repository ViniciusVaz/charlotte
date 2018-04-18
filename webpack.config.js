const HtmlWebpackPlugin = require("html-webpack-plugin")
    , vueConf = require("./config/vue-loader.config")

module.exports = {
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: vueConf
            },
            {
                test: /.(vue|js)$/,
                loader: "eslint-loader",
                exclude: /node_modules/
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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
}