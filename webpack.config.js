const path = require("path");

const HtmlPlugin = require("html-webpack-plugin");  //声明一个构造函数
const htmlPlugin = new HtmlPlugin({  //实例化一个对象,在内存中复制文件，磁盘中是找不到的
    template: "./src/index.html",
    filename: "./index.html"
});

const CleanWebpackPlugin = require("clean-webpack-plugin");  //声明一个构造函数,用于自动删除dist目录以及重新创建

module.exports = {
    mode: "development",  // production
    entry: path.join(__dirname, "./src/index1.js"),  // 指定打包的源文件路径，而不是默认的index.js
    output: {                                        // 指定打包的输出文件路径，而不是默认的dist/main.js
        path: path.join(__dirname, "./dist"),
        filename: "js/bundle.js"
    },
    plugins: [htmlPlugin, new CleanWebpackPlugin()],  // 使插件生效
    devServer: {   // 自动打开浏览器，指定ip、端口号
        open: true,
        host: "127.0.0.1",
        port: 8081
    },
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
            { test: /\.jpg|png|gif$/, use: "url-loader?limit=2048&outputPath=image" },
            { test: /\.js$/, use: "babel-loader", exclude: "/node_modules/" }
        ]
    },
    devtool: "eval-source-map",
    resolve: {
        alias: {
            "@": path.join(__dirname, "./src/")
        }
    }
}