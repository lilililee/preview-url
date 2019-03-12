const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack')
const rootPath = path.resolve(__dirname)
module.exports = {
  entry:{
    main: path.resolve(rootPath, "src/index.js"),
  }, 
  output: {
      publicPath: './',
      path: path.resolve(rootPath, "dist"),
      filename: 'src/[name][hash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(css|less|scss)$/,
        use: [ 'style-loader', 'css-loader?modules&localIdentName=[local]__[hash:base64:5]', 'postcss-loader','sass-loader' ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@': rootPath,
      // '@scss': path.resolve(rootPath, 'assets/style'),
      // '@assets': path.resolve(rootPath, 'assets'),
      // '@components': path.resolve(rootPath, 'src/components'),
      // '@common': path.resolve(rootPath, 'src/common')
    }
  },
  devServer: {
    contentBase: path.resolve(rootPath, "dist"),//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    host:'127.0.0.1',
    port: 7000,
    hot: true,
    inline: true,//实时刷新
    hot: true,//Enable webpack's Hot Module Replacement feature
    compress:true,//Enable gzip compression for everything served
    overlay: true, //Shows a full-screen overlay in the browser
    stats: "errors-only" ,//To show only errors in your bundle
    open:true, //When open is enabled, the dev server will open the browser.
    disableHostCheck: true,
    // proxy: {
    //     "/api": {
    //         target: "http://127.0.0.1:7001",
    //         changeOrigin: true
    //     }
    // }//重定向
  },
  plugins: [
      new HtmlWebPackPlugin({
          template: path.resolve(rootPath, "public/index.html"),
          filename: "index.html",
          favicon: path.resolve(rootPath, "public/favicon.ico")
      }),
      new webpack.HotModuleReplacementPlugin(),
      new CleanWebpackPlugin()
  ]
}